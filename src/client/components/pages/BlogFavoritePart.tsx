import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// action
import { listFavorite as actionListFavorite } from 'client/actions'

// libraries
import { useCurrentLanguagePack } from 'client/components/custom/hooks'
import { initialState } from 'client/store/state'

// components
import SearchPost from 'client/components/fragments/blog/parts/SearchPost'
import Loading from 'client/components/fragments/common/Loading'
import ErrorPage from 'client/containers/common/ErrorPage'

// interfaces
import { AllProps, SessionInfo, State, StateListFavorite } from 'common'

const BlogSearchPart: React.FC<AllProps> = () => {
	const {
		listFavorite = initialState.listFavorite as StateListFavorite,
		sessionInfo = initialState.sessionInfo as SessionInfo,
	} = useSelector((state: State) => state)

	const { status } = useCurrentLanguagePack()

	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useDispatch()

	useEffect(() => {
		if (isLoading && listFavorite.statusCode === 200) {
			setIsLoading(false)
		}
	}, [listFavorite])

	useEffect(() => {
		setIsLoading(true)
		dispatch(
			actionListFavorite({
				path: {
					list_id: sessionInfo.listId,
				},
				query: {
					language: status,
				},
			})
		)
	}, [])

	if (listFavorite.statusCode === -1 || isLoading) {
		return <Loading text="LOADING DATA" />
	}

	if (listFavorite.statusCode !== 200 || !listFavorite.result) {
		return <ErrorPage text={`${listFavorite.statusCode}`} />
	}

	const { items, item_count } = listFavorite.result

	if (items.length === 0) {
		return <ErrorPage text="NO RESULTS" />
	}

	return <SearchPost results={items} totalResults={item_count} area="favorite" />
}

export default BlogSearchPart

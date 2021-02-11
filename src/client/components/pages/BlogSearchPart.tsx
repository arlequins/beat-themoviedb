import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

// action
import { addSearchMovies } from 'client/actions'

// libraries
import { useCurrentLanguagePack, useQuery } from 'client/components/custom/hooks'
import { initialState } from 'client/store/state'

// components
import SearchPost from 'client/components/fragments/blog/parts/SearchPost'
import Loading from 'client/components/fragments/common/Loading'
import ErrorPage from 'client/containers/common/ErrorPage'

// interfaces
import { AllProps, ParamsBlogSearch, State, StateSearchMovies } from 'common'
import { useParams } from 'react-router'

const BlogSearchPart: React.FC<AllProps> = () => {
	const { searchMovies = initialState.searchMovies as StateSearchMovies } = useSelector(
		(state: State) => state
	)

	const history = useHistory()
	const location = useLocation()

	const { status } = useCurrentLanguagePack()

	const query: URLSearchParams = useQuery()
	const { keyword }: ParamsBlogSearch = useParams()

	const rawQueryPage: any = query.get('page') !== null ? query.get('page') : '1'
	const queryPage = Number.parseInt(rawQueryPage, 10)
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(Number.isInteger(queryPage) ? queryPage : 1)

	const dispatch = useDispatch()

	useEffect(() => {
		if (isLoading && searchMovies.statusCode === 200) {
			setIsLoading(false)
			if (query.get('page') !== null || (query.get('page') === null && currentPage > 1)) {
				history.push(`${location.pathname}?page=${currentPage}`)
			}
		}
	}, [searchMovies])

	useEffect(() => {
		setIsLoading(true)
		dispatch(
			addSearchMovies({
				query: keyword,
				language: status,
				page: currentPage,
			})
		)
	}, [currentPage])

	useEffect(() => {
		if (queryPage !== currentPage) {
			setCurrentPage(queryPage)
		}
	}, [location])

	if (searchMovies.statusCode === -1 || isLoading) {
		return <Loading text="LOADING DATA" />
	}

	if (searchMovies.statusCode !== 200 || !searchMovies.result) {
		return <ErrorPage text={`${searchMovies.statusCode}`} />
	}

	const { results, total_pages, total_results } = searchMovies.result

	if (results.length === 0) {
		return <ErrorPage text="NO RESULTS" />
	}

	return <SearchPost results={results} totalPages={total_pages} totalResults={total_results} area="search" currentPage={currentPage} setCurrentPage={setCurrentPage} />
}

export default BlogSearchPart

import { DEFAULT_LANG } from 'client/constants/Env'
import { LanguagePack } from 'common'

const LANGUAGE_PACKS: any = {
	EN: {
		info: {
			lang: 'Language',
			headerTitle: 'BEAT',
			footerTitle: 'Beat Project',
			topTitle: 'WHICH MOVIE?',
			searchTitle: 'Search Results',
			likeText: 'like!',
			countText: 'Count',
			overCount: 'Over',
			searchLabel: 'Search',
			submitBtn: 'submit',
			searchPlaceholder: 'type here',
		},
		head: {
			title: 'BEAT',
			desc: 'BEAT DESC',
			keywords: ['beat', 'an'],
			search: 'Search',
			favorite: 'Favorite',
		},
	},
	JA: {
		info: {
			lang: '言語',
			headerTitle: 'BEAT',
			footerTitle: 'Beat Project',
			topTitle: 'どんな映画を見たいですか？',
			searchTitle: '検索結果',
			likeText: 'いいね!',
			countText: '件',
			overCount: '以上',
			searchLabel: '検索',
			submitBtn: '確定',
			searchPlaceholder: '入力',
		},
		head: {
			title: 'BEAT',
			desc: 'BEAT DESC',
			keywords: ['beat', 'an'],
			search: '検索',
			favorite: 'お気に入り',
		},
	},
	KO: {
		info: {
			lang: 'Language',
			headerTitle: 'BEAT',
			footerTitle: 'Beat Project',
			topTitle: '어떤 영화를 보고 싶으신가요?',
			searchTitle: '검색 결과',
			likeText: '추천',
			countText: '건',
			overCount: '이상',
			searchLabel: '검색',
			submitBtn: '확인',
			searchPlaceholder: '입력해주세요',
		},
		head: {
			title: 'BEAT',
			desc: 'BEAT DESC',
			keywords: ['beat', 'an'],
			search: '検索',
			favorite: 'Favorite',
		},
	},
}

export const LANGUAGE_PACK = (lang: string): LanguagePack => {
	return LANGUAGE_PACKS[lang]
		? {
				...LANGUAGE_PACKS[lang],
				isExist: true,
		  }
		: {
				...LANGUAGE_PACKS[DEFAULT_LANG],
				isExist: false,
		  }
}

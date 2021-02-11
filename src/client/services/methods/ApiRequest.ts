import axios from 'axios'
import { AxiosResponse } from 'axios'
import queryString from 'query-string'

const methods = ['get', 'post']

interface Request {
	[key: string]: (endpoint: string, requestBody?: any) => Promise<AxiosResponse>
}

export default methods.reduce(
	(request: Request, method: any): any => ({
		...request,
		[method]: async (endpoint: string, apiKey: string, requestBody?: any) => {
			const common = {
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=utf-8',
			}
			const query = queryString.stringify(
				requestBody && requestBody.query
					? {
							api_key: apiKey,
							...requestBody.query,
					  }
					: {
							api_key: apiKey,
					  }
			)
			const requestUrl = query.length > 0 ? `${endpoint}?${query}` : endpoint

			const response: AxiosResponse = await axios(requestUrl, {
				method,
				...{
					data:
						method === 'get' ? undefined : requestBody && requestBody.body ? requestBody.body : {},
					headers: {
						...common,
					},
				},
			})

			const results: any = await response.data
			return results
		},
	}),
	{} as Request
)

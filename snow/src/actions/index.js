import * as types from '../constants/ActionTypes'
import Post from '../api/Post'
import Get from '../api/Get'

const get = new Get()
const post = new Post()

export const receiveGetStationNames = (json) =>({ //已完成数据
  type:types.RECEIVE_GET_STATION,
  names:json.data
})

export const requestGetStationNames = () => ({ //未完成数据
  type:types.REQUEST_GET_STATION,

})



export const fetchPosts = (data) => async dispatch => { //所有数据获取ajax
      dispatch(requestGetStationNames())
      const json = await get.Task(data)    
      dispatch(receiveGetStationNames(json))     
}


export const requestGetDetail = (id) => async dispatch => {
	dispatch(GetrequestGetDetail())
	const json = await get.tasks(id)
	
	dispatch(receiveGetDetail(json))
}
export const GetrequestGetDetail = () =>({
	type:types.REQUEST_GET_VALUE_DETAILS
})

export const receiveGetDetail =(json) =>({
	type:types.RECEIVE_GET_VALUE_DETAILS,
	names:json.data
})

export const fetchPostsIfNeeded = (data) => (dispatch, getState) => {  //启动与判断
   
    return dispatch(fetchPosts(data))
  
}

export const postStationSelect = (data) => async (dispatch) =>{    //工单条件搜索
    dispatch(requestPostStationSelect())
  
    const json = await post.postSearch(data)
    dispatch(receivePostStationSelect(json))

}

export const receivePostStationSelect = (json) => ({ //工单条件成功
    type:types.RECEIVE_POST_VALUE_SEARCH,
    names:json.data
})

export const requestPostStationSelect = () => ({  //工单不成功
  type:types.REQUEST_POST_VALUE_SEARCH
})




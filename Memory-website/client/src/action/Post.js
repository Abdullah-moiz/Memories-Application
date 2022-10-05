import * as api from '../Api/index'




export const  getPost  = () =>  async (dispatch) => {
    try {
        const {data} = await api.fetchPost();
        dispatch({type : 'FETCH_ALL' , payload:data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async(dispatch) =>
{
    try {
        const {data} = await api.createPost(post);
        console.log(data);
        dispatch({type : 'CREATE' , payload : data})
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id , post) => async (dispatch) =>
{
    try {
        const{data}= await api.updatePost(id, post)
        dispatch({type : 'UPDATE' , payload : data})

    } catch (error) {
        console.log(error);
    }
}
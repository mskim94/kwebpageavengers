import { USERINFO ,G_ALL, G_2, CATEGORY, SNUM, GNUM, FORUMSTATE, GFBOTH, GALLERYSTATE } from '../actions';
import {combineReducers} from 'redux';

const initialState = {	
	value: 0,
	diff: 0
}

const g_initialState = {
	STATE: 0,			// 사진 자세히보기 : 1 , 목록보기 : 0
	snum: 0,			// 사진 SQ 번호
	category: 0,		// 몇번째 카테고리를 택했는가
	diff: 0
}

const userState = {
	name: "default",
	grade: "default",
	num: 0,
	lgcheck: 0, //차례대로 이름, 등급, sq번호, 로그인여부
	admin: 0
}

const Gnum = (state=initialState, action) => {
	switch(action.type) {
		case GNUM:
			return Object.assign({},state,{
				value: action.diff 
			});
		case GFBOTH:
			return Object.assign({},state,{
				value: action.diff_g
			});
		default:
			return state;
	}
}

const ForumState = (state=initialState, action) => {
	switch(action.type) {
		case FORUMSTATE:
			return Object.assign({},state,{
				value: action.diff 
			});
		case GFBOTH:
			return Object.assign({},state,{
				value: action.diff_f
			});
		default:
			return state;
	}
}

const GalleryState = (state=g_initialState, action) => {
	switch(action.type) {
		case GALLERYSTATE:
			return Object.assign({},state,{
				STATE: action.diff 
			});
		case SNUM:
			return Object.assign({},state,{
				snum: action.diff 
			});
		case CATEGORY:
			return Object.assign({},state,{
				category: action.diff 
			});
		case G_2:
			return Object.assign({},state,{
				STATE: action.diff_s,
				snum: action.diff_n
			});
		case G_ALL:
			return Object.assign({},state,{
				STATE: action.diff_s,
				snum: action.diff_n,
				category: action.diff_c
			});
		default:
			return state;
	}
}

const Userinfo = (state=userState, action) => {
	switch(action.type) {
		case USERINFO:
			return Object.assign({},state,{
				name: action.diff_n,
				grade: action.diff_g,
				num: action.diff_m,
				lgcheck: action.diff_l, 
				admin: action.diff_a
			});
		default:
			return state;
	}
}


const combinedApp = combineReducers({
	Gnum,
	ForumState,
	GalleryState,
	Userinfo
});

export default combinedApp;
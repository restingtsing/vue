import jsonp from '../common/js/jsonp'
import {commonParams,options} from "./config"

export function getSinger(){
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg?'
    const data = Object.assign({},commonParams,{
        g_tk:363692741，
        loginUin:0,
        hostUin:0,
        format:'json',
        platform:'yqq.json',
        needNewCode:0,
        data:'%7B"comm"%3A%7B"ct"%3A24%2C"cv"%3A0%7D%2C"singerList"%3A%7B"module"%3A"Music.SingerListServer"%2C"method"%3A"get_singer_list"%2C"param"%3A%7B"area"%3A-100%2C"sex"%3A-100%2C"genre"%3A-100%2C"index"%3A-100%2C"sin"%3A0%2C"cur_page"%3A1%7D%7D%7D'
    })
    return jsonp(url,data,options)
}
/**
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * https://sixlab.cn/
 *
 * @time: 2017/9/14 22:36
 * @author: Patrick <root@sixlab.cn>
 */

// let domain = "http://127.0.0.1:8800";
let domain = "https://sixlab.cn";

export const CHECK_LOGIN_URL = domain + "/api/checkLogin";
export const LOGIN_URL = domain + "/login";

export const MOVIE_SHOW = domain + "/movie/show";
export const MOVIE_FILM = domain + "/movie/film";

export const DOUBAN_SEARCH = "https://api.douban.com/v2/movie/search";
export const DOUBAN_FILM = "https://api.douban.com/v2/movie/subject/";
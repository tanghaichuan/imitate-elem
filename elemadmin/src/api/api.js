// getData将axios进一步进行封装，并处理返回的数据
import getData from './getData'

/**	
 * getTest
 */

export const getTest = () => getData('/api/test');

/**	
 * 登录
 */

export const login = data => getData('/api/admin/login',data,'post');

/**
* 获取管理员登录信息
*/

export const getAdminInfo = () => getData('/api/admin/getAdminInfo');

/**
* 退出登录
*/

export const singout = () => getData('/api/admin/singout');
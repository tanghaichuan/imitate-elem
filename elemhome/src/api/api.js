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


## 脚手架安装步骤

* 全局安装命令:
```
    cnpm install -g create-react-app
```

* 创建方法:
  * 创建名称不能使用大写
```
    create-react-app [项目名称]
```

* 运行:
  * 进入到对应目录
```
    cnpm start 
```

* jsx文件基本结构
```
import React from 'react';
class List extends React.Component{
    constructor(){
        super(...arguments)
    }
    render(){
        return (
                <div>
                    我是子组件
                    {

                    }
                </div>
        )
    }
}
export default List
```
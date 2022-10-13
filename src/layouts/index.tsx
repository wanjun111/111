import React from 'react'
import { Button } from 'antd'
import { Outlet } from 'react-router-dom'
const Layout: React.FC = (props) => {
    return (
        <div>
            <Button>11</Button>
            <Outlet></Outlet>
        </div>

    )
}
export default Layout
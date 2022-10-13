import React from 'react'
import { connect } from 'react-redux'
import { createIncrementAction } from '../../store/actions'

interface Shop {
    id: string | number
    name: string;
    price: number;
    count: number;
}
interface Props {
    createIncrementAction: (data: Shop) => void
}

const Home: React.FC<Props> = (props) => {
    console.log(props);
    return (
        <div>Home</div>
    )
}
export default connect(
    (state: any) => ({ list: state.shopList }),//映射状态
    { createIncrementAction }//映射操作状态的方法
)(Home);
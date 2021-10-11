import { Header } from "../components/Header/Header"

const Container = () => {
    const state = useSelector(state => state.backGround)

    return (
        <div>
            <div>
                <div className={`contain-${color}`}>
                    <Header />
                </div>
            </div>
        </div>
    )
}
export default Container;
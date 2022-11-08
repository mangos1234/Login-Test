import { Navigate } from 'react-router-dom'

const Home = (props) => {
    console.log(props)

    if (props.token.length < 1){
        return <Navigate to='/'  />
    }
    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}

export default Home;
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = (props) => {
    console.log(props)

    if (props.token.length < 1){
        return <Navigate to='/'  />
    }
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opactity: 0}}
        >
            <h1>Home Page</h1>
        </motion.div>
    )
}

export default Home;
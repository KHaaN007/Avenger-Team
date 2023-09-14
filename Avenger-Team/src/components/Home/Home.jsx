import PropTypes from 'prop-types'

const Home = ({ carts, handleSelectedActor }) => {

    return (
        <div className='lg:flex mx-auto py-20 lg:w-3/4 gap-10'>
            <div className='w-3/4'>
                <h1 className='text-7xl font-semibold text-center text-fuchsia-100 my-20 font-serif'>Avengers World</h1>
                <div className='grid lg:grid-cols-3 gap-10'>
                    {
                        // Actor Cart Cards
                        carts.map(actor =>
                            <div key={actor.id} className="card  bg-base-100 shadow-xl">
                                <figure className="px-5 pt-5">
                                    <img src={actor.image} alt="Shoes" className=" " />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-3xl">{actor.name}</h2>
                                    <div>
                                        <p className='text-2xl  my-3'>{actor.role}</p>
                                        <p className='text-2xl font-medium'>Paid : {actor.salary}<span className='font-bold'>$</span>
                                        </p>
                                    </div>
                                    <div className="card-actions">
                                        <button onClick={() => handleSelectedActor(actor)} className="btn btn-primary text-xl">Hired
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='w-1/4'>
                <h1 className='text-black text-5xl font-semibold'>Selected Actor List</h1>
            </div>
        </div>
    )
}

Home.propTypes = {
    carts: PropTypes.object.isRequired,
    handleSelectedActor: PropTypes.func.isRequired
}

export default Home
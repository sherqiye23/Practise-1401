import Container from "react-bootstrap/esm/Container";
import Helmet from "react-helmet"
import { useDeleteColoshopMutation, useGetAllColoshopQuery, useGetByIDQuery } from "../../redux/Slice";
import { useContext, useEffect, useState } from "react";
import { basketContext } from "../../context/BasketContext";

export default function Home() {
    let { data, refetch, isLoading } = useGetAllColoshopQuery()
    let { basket, setBasket } = useContext(basketContext)
    let [deleteColoshop] = useDeleteColoshopMutation()
    let [alldata, setAlldata] = useState([])

    useEffect(() => {
        if (!isLoading) {
            setAlldata(data)
            refetch()
        }
    }, [data])

    const handleBasket = (e, item) => {
        e.stopPropagation()
        let findBasket = basket.find((element) => element._id == item._id)
        console.log(findBasket);

        if (findBasket) {
            findBasket.count++
            setBasket([...basket])
        } else (
            setBasket([...basket, { ...item, count: 1 }])
        )
    }

    const handleDelete = (e, item) => {
        e.stopPropagation()
        deleteColoshop(item._id)
        refetch()
    }

    const handleDetail = (id) => {
        window.location = `detail/${id}`
    }

    const handleSort = (e) => {
        switch (e.target.value) {
            case "cheap":
                let cheapData = alldata.toSorted((a, b) => a.price - b.price)
                setAlldata(cheapData)
                break;
            case "expensive":
                let expensiveData = alldata.toSorted((a, b) => b.price - a.price)
                setAlldata(expensiveData)
                break;
            default:
                setAlldata(data)
                break;
        }
    }

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase().trim()
        console.log(searchValue);
        if (searchValue == "") {
            setAlldata(data)
        } else {
            let filteredSearch = data.filter((item) => item.name.toLowerCase().startsWith(searchValue))
            setAlldata(filteredSearch)
        }

    }


    return (
        <>
            <Helmet>
                <title>ColoShop Home</title>
            </Helmet>
            <>
                {/* hero */}
                <div
                    className="bg-[url('https://preview.colorlib.com/theme/coloshop/images/slider_1.jpg.webp')] py-[150px]">
                    <Container>
                        <div className="max-w-[700px]">
                            <p className="text-xl">Spring / Summer Collection 2017</p>
                            <h1 className="text-4xl sm:text-7xl">Get up to 30% Off New Arrivals</h1>
                            <button className="mt-3 bg-[#fe4c50] py-1 px-4 rounded-1 text-white">SHOP NOW</button>
                        </div>
                    </Container>
                </div>

                {/* section-2 */}
                <div className="my-4">
                    <Container>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                            <div className="relative flex items-center justify-center">
                                <div>
                                    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp" />
                                </div>
                                <div className="absolute top-[50%] w-[85%] text-center text-2xl py-2  bg-white font-bold ">
                                    WOMEN'S
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center">
                                <div>
                                    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg.webp" />
                                </div>
                                <div className="absolute top-[50%] w-[85%] text-center text-2xl py-2 bg-white font-bold ">
                                    ACCESSORIES'S
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center">
                                <div>
                                    <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg.webp" />
                                </div>
                                <div className="absolute top-[50%] w-[85%] text-center text-2xl py-2  bg-white font-bold ">
                                    MEN'S
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* New Arrivals */}
                <div>
                    <Container>
                        <div className="flex items-center justify-center flex-col">
                            <h1>New Arrivals</h1>
                            <div className="h-[4px] w-[80px] bg-[#fe4c50]"></div>
                            <div className="my-5">
                                <span className="py-2 px-2 border bg-[#fe4c50] text-white">ALL</span>
                                <span className="py-2 px-2 border">WOMEN'S </span>
                                <span className="py-2 px-2 border">ACCESSORIES</span>
                                <span className="py-2 px-2 border">MEN'S</span>
                            </div>
                            <div className="py-3">
                                <input type="text" className="py-1 px-2 border" onChange={(e) => handleSearch(e)} />
                                <select className="py-1 px-2 border" onChange={(e) => handleSort(e)}>
                                    <option>Sort by price</option>
                                    <option value="cheap">First Cheap</option>
                                    <option value="expensive">First Expensive</option>
                                </select>
                            </div>
                            {
                                isLoading ? (
                                    <h1>...Loading</h1>
                                ) : (
                                    alldata.length != 0 ? (
                                        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                                            {
                                                alldata.map((item) => (
                                                    <div key={item._id} className="p-3" onClick={() => handleDetail(item._id)}>
                                                        <div><img src={item.image} /></div>
                                                        <div className="flex items-center justify-center flex-col gap-2">
                                                            <h5 className="text-center">{item.name}</h5>
                                                            <span>
                                                                {
                                                                    item.isPrice ? (
                                                                        <>
                                                                            <span className="mr-2 text-[#fe4c50] font-bold">${item.price.toFixed(2)}</span>
                                                                            <span className="line-through text-gray-500 font-bold">$590.00</span>
                                                                        </>
                                                                    ) : (
                                                                        <span className="text-[#fe4c50] font-bold">${item.price}</span>
                                                                    )
                                                                }
                                                            </span>
                                                            <button className="bg-[#fe4c50] text-white py-2 text-center font-bold w-full" onClick={(e) => handleBasket(e, item)}>Add to Cart</button>
                                                            <button className="bg-[#1E1E27] text-white py-2 text-center font-bold w-full" onClick={(e) => handleDelete(e, item)}>Delete</button>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ) : (
                                        <h1>There is no product</h1>
                                    )
                                )
                            }

                        </div>
                    </Container>
                </div>

                {/* Deal Of The Week */}
                <div className="bg-[#F2F2F2] my-5">
                    <Container>
                        <div className="flex items-center justify-around flex-col gap-2 md:flex-row">
                            <div>
                                <img src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png.webp" />
                            </div>
                            <div className="flex items-center justify-center flex-col gap-6">
                                <h1>Deal Of The Week</h1>
                                <div className="h-[4px] w-[90px] bg-[#fe4c50]"></div>
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="bg-white h-[70px] w-[70px] lg:h-[100px] lg:w-[100px] rounded-[50%] flex flex-col items-center justify-center">
                                        <div className="font-bold text-4xl text-[#fe4c50]">2</div>
                                        <div className="text-gray">Day</div>
                                    </div>
                                    <div className="bg-white h-[70px] w-[70px] lg:h-[100px] lg:w-[100px] rounded-[50%] flex flex-col items-center justify-center">
                                        <div className="font-bold text-4xl text-[#fe4c50]">21</div>
                                        <div className="text-gray">Hours</div>
                                    </div>
                                    <div className="bg-white h-[70px] w-[70px] lg:h-[100px] lg:w-[100px] rounded-[50%] flex flex-col items-center justify-center">
                                        <div className="font-bold text-4xl text-[#fe4c50]">33</div>
                                        <div className="text-gray">Mins</div>
                                    </div>
                                    <div className="bg-white h-[70px] w-[70px] lg:h-[100px] lg:w-[100px] rounded-[50%] flex flex-col items-center justify-center">
                                        <div className="font-bold text-4xl text-[#fe4c50]">23</div>
                                        <div className="text-gray">Sec</div>
                                    </div>
                                </div>
                                <button className="mt-3 bg-[#1E1E27] py-2 px-4 rounded-1 text-white">SHOP NOW</button>
                            </div>
                        </div>
                    </Container>

                </div>

                {/* Latest blogs */}
                <div className="my-5">
                    <Container>
                        <div className="flex justify-center items-center flex-col gap-3">
                            <h1>Latest Blogs</h1>
                            <div className="h-[4px] w-[90px] bg-[#fe4c50]"></div>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg.webp" />
                                </div>
                                <div>
                                    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg.webp" />
                                </div>
                                <div>
                                    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg.webp" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Newsletter */}
                <div className="py-4 bg-[#F2F2F2] my-5">
                    <Container>
                        <div className="flex items-start lg:items-center justify-between flex-col lg:flex-row">
                            <div>
                                <h3>Newsletter</h3>
                                <p className="text-gray-700">Subscribe to our newsletter and get 20% off your first purchase</p>
                            </div>
                            <div>
                                <input type="text" className="bg-white px-3 py-2" placeholder="Your email" />
                                <button className="bg-[#fe4c50] text-white px-3 py-2">SUBSCRIBE</button>
                            </div>
                        </div>
                    </Container>
                </div>


            </>
        </>
    )
}
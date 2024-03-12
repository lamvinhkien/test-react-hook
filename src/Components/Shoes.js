import { useState, useEffect } from "react";
import axios from "axios";

const Shoes = () => {

    const [listData, setListData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get("http://localhost:3001/api")
                let data = (res && res.data.listData) ? res.data.listData : []
                setListData(data)
                setIsError(false)
                setIsLoading(false)
            } catch (err) {
                setIsLoading(false)
                setIsError(true)
            }
        }
        fetchData()
    }, [])

    return (
        <table className="Shoes">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Brand</td>
                    <td>Type</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                {isError === false && isLoading === false && listData && listData.length > 0 &&
                    listData.map((data) => {
                        return (
                            <tr key={data._id}>
                                <td>{data.Name}</td>
                                <td>{formatMoney(data.Price)}</td>
                                <td>{data.Brand}</td>
                                <td>{data.Type}</td>
                                <td>{data.Status}</td>
                            </tr>
                        )
                    })}

                {isLoading === true &&
                    <tr>
                        <td className="isLoading" colSpan={5}>Loading...</td>
                    </tr>
                }

                {isError === true &&
                    <tr>
                        <td className="isError" colSpan={5}>Something wrong...</td>
                    </tr>
                }
            </tbody>
        </table>
    )

    function formatMoney(num) {
        var p = num.toFixed(0).split(".");
        return p[0].split("").reverse().reduce(function (acc, num, i, orig) {
            return num + (num !== "-" && !(i % 3) ? "," : "") + acc;
        });
    }
}

export default Shoes;
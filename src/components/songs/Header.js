import React, { useContext } from "react";
import SongDetails from './Format'
import DataContext from "../../context/DataContext";

export default function TopSongHeading() {
    const { topsongs } = useContext(DataContext)
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    const arr = topsongs
    // console.log(topsongs)
    return (
        <div style={{ border: "10px solid red" }}>
            <h1>Top Songs are woSoSongDetailsgDetailsing</h1>


            <table className="table">
                <thead style={{ backgroundColor: "#6c757d" }} b>
                    <tr>
                        <th scope="col">Artwork</th>
                        <th scope="col">Song</th>
                        <th scope="col">Date of Release</th>
                        <th scope="col">Artists</th>
                        <th scope="col">Rate</th>

                    </tr>
                </thead>

                {
                    arr.map((element) => {
                        console.log(element)
                        // return <SongDetails song={element} />

                    })
                }



                {/* <tbody>
                    <tr style={{ verticalAlign: 'baseline' }}>
                        <th scope="row">
                            <img src={`${require('./download.jpeg')}`} style={{ width: '10rem', height: '10rem' }} alt="Artist" />
                        </th>
                        <td style={{ vericalAlign: 'baseline' }}>HOPE</td>
                        <td>18-06-2019</td>
                        <td>XXXTENTION</td>
                        <td>&#11088;</td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody> */}
            </table>

        </div>


    )
}
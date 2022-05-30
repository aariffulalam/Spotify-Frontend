import React from "react";

export default function TopSong() {
    return (
        <div style={{ border: "10px solid red" }}>
            <h1>Top Songs are working</h1>


            <table className="table">
                <thead style={{ backgroundColor: "#6c757d" }}>
                    <tr>
                        <th scope="col">Artwork</th>
                        <th scope="col">Song</th>
                        <th scope="col">Date of Release</th>
                        <th scope="col">Artists</th>
                        <th scope="col">Rate</th>

                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>

        </div>


    )
}
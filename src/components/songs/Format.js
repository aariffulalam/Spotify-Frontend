import React from "react";

export default function SongDetails(props) {
    return (
        <tbody>
            <tr style={{ verticalAlign: 'baseline' }}>
                <td>{props.song}</td>
                <th scope="row">
                    <img src={`${require('./download.jpeg')}`} style={{ width: '10rem', height: '10rem' }} alt="Artist" />
                </th>
                <td style={{ vericalAlign: 'baseline' }}>Hope</td>
                <td>18-06-2019</td>
                <td>XXXTENTION</td>
                <td>&#11088;</td>

            </tr>
            {/* <tr>
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
            </tr> */}
        </tbody>
    )
}
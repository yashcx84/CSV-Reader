import { React, useState } from 'react'
import CSVReader from 'react-csv-reader';

export default function CsvReader() {
    const [csvData, setCsvData] = useState(null)
    const fileUpload = (data) => {
        setCsvData(data)
    }
    return (
        <div className='csvContainer'>
            <h1>CSV Reader.</h1>
            <p>Upload Your CSV File to Get Into It.</p>
            <CSVReader onFileLoaded={fileUpload} cssInputClass="csvUpload" />
            {csvData && (
                <div className='outputCSV'>
                    <h3>Your CSV File Data</h3>
                    <p>{JSON.stringify(csvData, null, 2)}</p>
                </div>
            )}
        </div>
    )
}

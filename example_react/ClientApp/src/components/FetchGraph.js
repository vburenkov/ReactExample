import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

export class FetchGraph extends Component {
    static displayName = FetchGraph.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts)
    {
        return (
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        forecasts.map(forecast =>
                            <tr>
                                <td>{forecast.x}</td>
                                <td>{forecast.y}</td>
                            </tr>
                        )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchGraph.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1 id="tabelLabel">Graph data</h1>
                {contents}
                <h1>Chart</h1>

                <VictoryChart
                    width={550}
                    height={300}
                    scale={{ x: "time" }}
                    containerComponent={
                        <VictoryZoomContainer responsive={false}
                            zoomDimension="x"
                            zoomDomain={this.state.zoomDomain}
                            onZoomDomainChange={this.handleZoom.bind(this)}
                        />
                    }
                >

                    <VictoryLine
                        style={{
                            data: { stroke: "tomato" }
                        }}
                        data={[
                            { x: new Date(1982, 1, 1), y: 125 },
                            { x: new Date(1987, 1, 1), y: 257 },
                            { x: new Date(1993, 1, 1), y: 345 },
                            { x: new Date(1997, 1, 1), y: 515 },
                            { x: new Date(2001, 1, 1), y: 132 },
                            { x: new Date(2005, 1, 1), y: 305 },
                            { x: new Date(2011, 1, 1), y: 270 },
                            { x: new Date(2015, 1, 1), y: 470 }
                        ]}
                    />

                </VictoryChart>

            </div>
        );
    }

<<<<<<< HEAD
    async populateGraphData()
    {
        const response = await fetch("graphpoint");
        const data = await response.json();
        var filteredData = data.slice(0, 5);
        this.setState({ graphData: filteredData, loading: false });
=======
    async populateWeatherData() {
        const response = await fetch("graphpoint");
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
>>>>>>> parent of c7c4f6c (add working version)
    }
}

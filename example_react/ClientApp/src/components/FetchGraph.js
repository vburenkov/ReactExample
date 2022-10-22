import React, { Component } from 'react';

export class FetchGraph extends Component
{
    static displayName = FetchGraph.name;

    constructor(props)
    {
        super(props);
        this.state = { graphData: [], loading: true };
    }

    componentDidMount()
    {
        this.populateGraphData();
    }

    static renderForecastsTable(forecasts) {
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

    render()
    {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchGraph.renderForecastsTable(this.state.graphData);

        return (
            <div>
                <h1 id="tabelLabel">Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateGraphData() {
        const response = await fetch("graphpoint");
        const data = await response.json();
        this.setState({ graphData: data, loading: false });
    }
}

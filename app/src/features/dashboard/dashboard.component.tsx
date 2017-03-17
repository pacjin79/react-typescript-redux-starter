import * as React from 'react';

export interface IDashboardProps {
}

class DashboardComponent extends React.Component<IDashboardProps & React.ClassAttributes<DashboardComponent>, void> {
    constructor(props:IDashboardProps) {
        super(props);
    }

    render() {
        return (
            <h1>Hi</h1>
        )
    }
}

const route = () => (
    <DashboardComponent/>
);

export default route;
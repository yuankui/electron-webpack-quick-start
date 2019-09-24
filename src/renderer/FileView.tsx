import * as React from "react";
import * as fs from 'fs';

interface Props {
    filePath: string,
}

interface State {
    text: string,
}

export default class FileView extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            text: '',
        };
    }

    render() {
        return <p>
            {this.state.text}
        </p>;
    }

    componentDidMount(): void {
        const that = this;
        fs.readFile(this.props.filePath, (err, data) => {
            that.setState({
                text: data.toString(),
            })
        })
    }
}
import * as React from "react";
import * as fs from 'fs';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/mode/python/python';

interface Props {
    filePath: string,
}

interface State {
    text: string,
}

export default class CodeView extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            text: '',
        };
    }

    render() {
        return <CodeMirror
            onBeforeChange={editor => {}}
            options={{
                mode: 'python',
                theme: 'material',
                lineNumbers: true
            }}
            value={this.state.text} />
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
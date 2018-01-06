import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
const FormItem = Form.Item;


class NormalLoginForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.props.onSubmit;
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            this.onSubmit?this.onSubmit(err, values):null;

        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                </FormItem>
                <FormItem>
                    <Row justify="end">
                        <Col span={11} offset={5}>
                            <Button type="default" className="login-form-button">
                                Buy a Ticket
                            </Button>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Col>

                    </Row>


                    {/*<a className="login-form-forgot" href="">Forgot password</a>*/}


                </FormItem>
            </Form>
        );
    }
}

const LcpLoginForm = Form.create()(NormalLoginForm);
export default LcpLoginForm;
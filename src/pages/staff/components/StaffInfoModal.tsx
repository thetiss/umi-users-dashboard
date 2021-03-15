import React, { FC } from 'react';
import { Modal, Form, message, Input } from "antd";
import ProForm, { ProFormText, ProFormSelect, ProFormDependency } from '@ant-design/pro-form';
import { ISingleStaffInfo } from '../model';

interface PageProps {
    visible: boolean;
    record: ISingleStaffInfo | undefined ;
    onCancel: () => void;
    onFinish: (currentStaffInfo: ISingleStaffInfo) => void;
}
const StaffInfoModal: FC<PageProps> = ({ visible, record, onCancel, onFinish }) => {
    const [ form ] = Form.useForm();
    const FormItem = Form.Item;
    return(
        <div>
            <Modal 
                visible={visible} 
                title='员工信息'
                okText='确定'
                cancelText='取消'
                onCancel={onCancel} 
                onOk={() => {
                    form
                        .validateFields()
                        .then( values => {
                            form.resetFields();
                            // debugger;
                            onFinish(values);
                        })
                        .catch(info => {
                            message.error('Form in Modal error');
                        })
                }}
            >
                <Form initialValues={record} form={form}>
                    {
                        record && ( <FormItem name='id' label='ID'>
                            <Input disabled={true} />
                        </FormItem> )
                    }                       
                    <FormItem name='name' label='姓名' rules={[{ required: true, message: '请输入姓名!' }]}>
                        <Input />
                    </FormItem>
                    <FormItem name='email' label='邮箱'>
                        <Input />
                    </FormItem>                    
                </Form>
            </Modal>
        </div>
    )
};
export default StaffInfoModal;
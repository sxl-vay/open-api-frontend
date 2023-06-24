import {
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import React, {useEffect, useRef} from 'react';
import {Modal} from "antd";
import {ProFormInstance} from "@ant-design/pro-form/lib";


export type Props = {
  values:API.BookkeepingBookVO;
  columns: ProColumns<API.BookkeepingBookVO>[];
  onCancel: () => void;
  onSubmit: (values: API.BookkeepingBookVO) => Promise<void>;
  visible: boolean;
};

const UpdateModal: React.FC<Props> = (props) => {
  const {values,visible, columns, onCancel, onSubmit} = props;

  const formRef = useRef<ProFormInstance>();
  console.log("change",values)
  useEffect(()=>{
    if (formRef) {
      console.log("do it",values)
      formRef.current?.setFieldsValue(values);
    }
  },[values])


  return <Modal open={visible} footer={null}  onCancel={() => onCancel?.()}>
    <ProTable
      type="form"
      columns={columns}
      formRef={formRef}
      onSubmit={async (value: API.BookkeepingBookVO)=>{
        onSubmit?.(value);
      }}
    />
  </Modal>;
};
export default UpdateModal;

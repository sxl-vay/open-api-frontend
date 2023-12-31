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
  useEffect(()=>{
    if (formRef) {
      formRef.current?.setFieldsValue(values);
    }
  },[values])

  return <Modal open={visible} footer={null}  onCancel={() => onCancel?.()}>
    <ProTable
      type="form"
      columns={columns}
      formRef={formRef}
      onSubmit={async (value: API.BookkeepingBookVO)=>{
        //在columns隐藏了id在form的显示后，需要将外部传递过了的record（这里化身了values）的id 手动传给value
        value.id = values.id
        onSubmit?.(value);
      }}
    />
  </Modal>;
};
export default UpdateModal;

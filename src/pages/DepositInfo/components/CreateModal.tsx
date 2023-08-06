import {
  ProColumns,
  ProTable,
  ProFormSelect
} from '@ant-design/pro-components';
import React from 'react';
import {Modal} from "antd";


export type Props = {
  columns: ProColumns<API.DepositInfoVO>[];
  onCancel: () => void;
  onSubmit: (values: API.DepositInfoVO) => Promise<void>;
  visible: boolean;
};

const CreateModal: React.FC<Props> = (props) => {

  const {visible,  columns, onCancel, onSubmit} = props;
  return <Modal open={visible} footer={null} onCancel={() => onCancel?.()}>
    <ProTable
      type="form"
      columns={columns}
      onSubmit={async (value: API.DepositInfoVO)=>{
        onSubmit?.(value);
      }}
    />
  </Modal>;
};
export default CreateModal;

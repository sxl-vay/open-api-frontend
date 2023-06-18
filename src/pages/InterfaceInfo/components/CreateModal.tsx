import {
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import React from 'react';
import {Modal} from "antd";
import {values} from "lodash";


export type Props = {
  columns: ProColumns<API.InterfaceInfoVO>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfoVO) => Promise<void>;
  visible: boolean;
};

const CreateModal: React.FC<Props> = (props) => {
  const {visible, columns, onCancel, onSubmit} = props;
  return <Modal open={visible} onCancel={() => onCancel?.()}>
    <ProTable
      type="form"
      columns={columns}
      onSubmit={async (value: API.InterfaceInfoVO)=>{
        onSubmit?.(value);
      }}
    />
  </Modal>;
};
export default CreateModal;

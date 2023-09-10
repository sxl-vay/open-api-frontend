import {PlusOutlined} from '@ant-design/icons';
import type {ActionType, ProColumns, ProDescriptionsItemProps} from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import {FormattedMessage, useIntl} from '@umijs/max';
import {Button, Drawer, message} from 'antd';
import React, {useRef, useState} from 'react';
import UpdateModal from './components/UpdateModal';
import {
  addUsingPOST,
  deleteBookkeepingInfoUsingPOST,
  updateBookkeepingInfoUsingPOST,
  listBookkeepingByPageUsingPOST

} from "@/services/open-api-backend/bookkeepingController";
import CreateModal from "@/pages/Bookkeeping/components/CreateModal";


const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.RuleListItem>();
  const [selectedRowsState, setSelectedRows] = useState<API.RuleListItem[]>([]);

  /**
   * @en-US Add node
   * @zh-CN 添加节点
   * @param fields
   */
  const handleAdd = async (fields: API.BookkeepingAddRequest) => {
    const hide = message.loading('正在添加');
    try {
      await addUsingPOST({...fields});
      message.success('新建接口成功');
      actionRef.current.reload();
      hide();
      return true;
    } catch (error: any) {
      hide();
      message.error(error.message);
      return false;
    }
  };

  /**
   * @en-US Update node
   * @zh-CN 更新节点
   *
   * @param fields
   */
  const handleUpdate = async (fields: API.BookkeepingAddRequest) => {
    const hide = message.loading('Configuring');
    try {
      await updateBookkeepingInfoUsingPOST({
        ...fields,

      });
      hide();
      message.success('Configuration is successful');
      actionRef.current.reload();
      return true;
    } catch (error) {
      hide();
      message.error('Configuration failed, please try again!');
      return false;
    }
  };

  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param record
   */
  const handleRemove = async (record: API.BookkeepingBookVO) => {

    const hide = message.loading('正在删除');
    if (!record) return true;
    try {
      await deleteBookkeepingInfoUsingPOST({
        id: record.id
      });
      hide();
      message.success('Deleted successfully and will refresh soon');
      actionRef.current.reload();
      return true;
    } catch (error) {
      hide();
      message.error('Delete failed, please try again');
      return false;
    }
  };

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'text',
      hideInForm: true,
      hideInTable: true
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInForm: true
    },

    {
      title: '余额宝',
      dataIndex: 'zfbFund',
      valueType: 'text',
    },
    {
      title: '基金',
      dataIndex: 'fund',
      valueType: 'text',
    },
    {
      title: '债券',
      dataIndex: 'bond',
      valueType: 'text'
    },
    {
      title: '股票',
      dataIndex: 'shares',
      valueType: 'text',
    },
    {
      title: '建设银行',
      dataIndex: 'constructionBank',
      valueType: 'text'
    },


    {
      title: '微信余额',
      dataIndex: 'wechatYue',
      valueType: 'text',
    },
    {
      title: '外借资金',
      dataIndex: 'debt',
      valueType: 'text'
    },
    {
      title: '微信基金',
      dataIndex: 'wechatFund',
      valueType: 'text',
    },

    {
      title: '农业银行',
      dataIndex: 'agriculturalBank',
      valueType: 'text'
    },



    {
      title: '招商银行',
      dataIndex: 'merchantsBank',
      valueType: 'text',
    },

    {
      title: '转移支付',
      dataIndex: 'transferPayment',
      valueType: 'text',
    },
    {
      title: '信用卡未还',
      dataIndex: 'creditCardArrears',
      valueType: 'text',
    },

    {
      title: '支付宝余额',
      dataIndex: 'zfbYue',
      valueType: 'text',
    },
    {
      title: '扣住转义支付总计',
      dataIndex: 'pureTotal',
      valueType: 'text',
      hideInForm: true
    },
    {
      title: '总计',
      dataIndex: 'total',
      valueType: 'text',
      hideInForm: true
    },


    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作"/>,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          <FormattedMessage id="pages.searchTable.config" defaultMessage="修改"/>
        </a>,
        <a key="config" onClick={() => {
          handleRemove(record)
        }}>
          <FormattedMessage
            id="pages.searchTable.subscribeAlert"
            defaultMessage="删除"
          />
        </a>,
      ],
    },


  ];

  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined/> <FormattedMessage id="pages.searchTable.new" defaultMessage="New"/>
          </Button>,
        ]}
        request={async (params: API.listBookkeepingByPageUsingGETParams) => {
          const res = await listBookkeepingByPageUsingPOST({
            ...params
          })
          if (res.data) {
            return {
              data: res.data.records || [],
              success: true,
              total: res.total,
            }

          }
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen"/>{' '}
              <a style={{fontWeight: 600}}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项"/>
              &nbsp;&nbsp;
              <span>
                <FormattedMessage
                  id="pages.searchTable.totalServiceCalls"
                  defaultMessage="Total number of service calls"
                />{' '}
                {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)}{' '}
                <FormattedMessage id="pages.searchTable.tenThousand" defaultMessage="万"/>
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.searchTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
          <Button type="primary">
            <FormattedMessage
              id="pages.searchTable.batchApproval"
              defaultMessage="Batch approval"
            />
          </Button>
        </FooterToolbar>
      )}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.searchTable.createForm.newRule',
          defaultMessage: 'New rule',
        })}
        width="400px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.RuleListItem);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.ruleName"
                  defaultMessage="Rule name is required"
                />
              ),
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc"/>
      </ModalForm>
      <UpdateModal
        columns={columns}
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        visible={updateModalOpen}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.RuleListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.RuleListItem>[]}
          />
        )}
      </Drawer>
      <CreateModal
        columns={columns}
        onCancel={() => {
          handleModalOpen(false)
        }}
        onSubmit={async (values) => {
          const success = await handleAdd(values);
          if (success) {
            handleModalOpen(false)
          }
        }} visible={createModalOpen}/>
    </PageContainer>
  );
};

export default TableList;

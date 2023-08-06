declare namespace API {
  type BaseResponseBookkeepingBookVO_ = {
    code?: number;
    data?: BookkeepingBookVO;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseDepositInfoVO_ = {
    code?: number;
    data?: DepositInfoVO;
    message?: string;
  };

  type BaseResponseLineChartVO_ = {
    code?: number;
    data?: LineChartVO;
    message?: string;
  };

  type BaseResponseListPieChartItemVO_ = {
    code?: number;
    data?: PieChartItemVO[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageBookkeepingBookVO_ = {
    code?: number;
    data?: PageBookkeepingBookVO_;
    message?: string;
  };

  type BaseResponsePageDepositInfoVO_ = {
    code?: number;
    data?: PageDepositInfoVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type BookkeepingAddRequest = {
    agriculturalBank?: number;
    bond?: number;
    constructionBank?: number;
    createTime?: string;
    creditCardArrears?: number;
    debt?: number;
    fund?: number;
    merchantsBank?: number;
    shares?: number;
    transferPayment?: number;
    wechatFund?: number;
    wechatYue?: number;
    zfbFund?: number;
    zfbYue?: number;
  };

  type BookkeepingBookVO = {
    agriculturalBank?: number;
    bond?: number;
    constructionBank?: number;
    createTime?: string;
    creditCardArrears?: number;
    debt?: number;
    deleteType?: number;
    fund?: number;
    id?: number;
    merchantsBank?: number;
    shares?: number;
    total?: number;
    transferPayment?: number;
    userId?: number;
    wechatFund?: number;
    wechatYue?: number;
    zfbFund?: number;
    zfbYue?: number;
  };

  type BookkeepingQueryRequest = {
    current?: number;
    endTime?: string;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    startTime?: string;
    userId?: number;
  };

  type BookkeepingUpdateRequest = {
    agriculturalBank?: number;
    bond?: number;
    constructionBank?: number;
    createTime?: string;
    creditCardArrears?: number;
    debt?: number;
    fund?: number;
    id?: number;
    merchantsBank?: number;
    shares?: number;
    transferPayment?: number;
    wechatFund?: number;
    wechatYue?: number;
    zfbFund?: number;
    zfbYue?: number;
  };

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type DepositInfoAddRequest = {
    amount?: number;
    cardType?: number;
    endTime?: string;
    remindType?: number;
    startTime?: string;
    tips?: string;
  };

  type DepositInfoQueryRequest = {
    cardType?: number;
    createTime?: string;
    endTime?: string;
    id?: number;
    remindType?: number;
    startTime?: string;
    userId?: number;
  };

  type DepositInfoUpdateRequest = {
    amount?: number;
    cardType?: number;
    createTime?: string;
    endTime?: string;
    id?: number;
    remindType?: number;
    startTime?: string;
    tips?: string;
    userId?: number;
  };

  type DepositInfoVO = {
    amount?: number;
    cardtype?: number;
    createtime?: string;
    endtime?: string;
    id?: number;
    starttime?: string;
    tips?: string;
    userid?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LineChartVO = {
    times?: string[];
    totals?: number[];
  };

  type listBookkeepingByPageUsingGETParams = {
    /** current */
    current: number;
    /** pageSize */
    pageSize: number;
  };

  type listDepositInfoByPageUsingGETParams = {
    /** current */
    current: number;
    /** pageSize */
    pageSize: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageBookkeepingBookVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: BookkeepingBookVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageDepositInfoVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: DepositInfoVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PieChartItemVO = {
    name?: string;
    value?: number;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    mpOpenId?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}

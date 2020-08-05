export const ModuleMenu=[
    {name:"结算模块",iconCn:"fa fa-eye",menu:[{text:"新增签证",linkTo:"management"},{text:'历史签证',linkTo:'culture'},{text:"签证查询",linkTo:"culture"}]},
    {name:"预算管理",iconCn:"fa fa-headphones",menu:[{text:"产值受益",linkTo:'/operations'},{text:"日志查询",linkTo:'/logquery'}]},
    {name:"值班排班",iconCn:"fa fa-magnet",menu:[{text:"值班统计",linkTo:'/statistics'},{text:"排班规则",linkTo:'/regulation'},{text:'人员排班',linkTo:'/Schedulin'} ]},
    {name:"系统管理",iconCn:"fa fa-gear fa-fw",menu:[{text:"角色管理",linkTo:'/system/Role'},{text:"人员分配",linkTo:'/system/Personnel'}]},

	
]

export const TitMenu=[
	{name:"成本中心",iconCn:"fa fa-eye",linkTo:'/defects/cbzx'},
	{name:"工程中心",iconCn:"fa fa-eye",linkTo:'/defects/gczx'},
	{name:"招标中心",iconCn:"fa fa-eye",linkTo:'/defects/zbzx'},
	{name:"其它部门",iconCn:"fa fa-eye",linkTo:'/defects/other'},
	
]

const SourceTypeOptions = [
    {label:'一般',value:10},
    {label:'重要',value:20},
    {label:'紧急',value:30}
]
export const OrderTypeOptions = [
    {label:'是',value:'001'},
    {label:'否',value:'002'}
]

export const columnsAll=[   //缺陷表头
    { title: '项目名称', dataIndex:'P_name',width: 150, key:'q',pageId:["1","2","3","4","5","6","7","8","9","10","11"]},
    { title: '签证编号', dataIndex:'qzbh',width: 150, key:'w', pageId:['1','2','3','4','5','6','7','8','9','10','11']},
    { title: '供应商', dataIndex:'dfdw',width: 150, key:'e', pageId:['1','2','3','4','5','6','7','8','9','10','11']},
    { title: '签证时间', dataIndex:'Data', width:120, key:'r', pageId:['1','2','3','4','5','6','7','8','9','10','11']},
    { title: '签证金额', dataIndex:'qzje', width:150, key:'t', pageId:['1','2','3','4','5','6','7','8','9','10','11']},
    { title: '签证内容', dataIndex:'qznr', width:150, key:'y', pageId:['1','2','3','4','5','6','7','8','9','10','11']},
    { title: '详细内容', dataIndex:'xxnr', width:150, key:'u', pageId:['1','2','3','4','5','6','7','8','9','10','11']},
     { title: '原因分析', dataIndex:'yyfx', width:150, key:'h', pageId:['1','2','3','4','5','6','7','8','9','10','11']},
    { title: '备注', dataIndex:'bz', width:150, key:'j', pageId:['1','2','3','4','5','6','7','8','9','10','11']},
    { title:'是否完成',dataIndex:'Accom',width:70,key:'k',pageId:['1','2','3','4','5','6','7','8','9','10','11']},
    { title: '文件', dataIndex:'file', width:100, key:'g', pageId:['1','2','3','4','5','6','7','8','9','10','11']}
   

]

export const actionsBtnsAll=[
    {name:"编辑",funIndex:"0",pageId:["1","2","3","4","5","6","7","8","9","10","11"]},
    {name:"删除",funIndex:"9",pageId:['1','2','3','4','5','6','7','8','9',"10","11"]},
    {name:'详情',funIndex:"8",pageId:['1','2','3','4','5','6','7','8','9','10','11']}	
]

export const FromDataAllData=[ //基本工单title   //填报中
    {title:'填报人',dataIndex:'createUserName', key:'Quot', rowCn:'row-3', require:false, type:'Foundpeople',disabled:false,PeoVale:10},
    
    {title:'缺陷等级', dataIndex:'qxdj', key:'DefectLevels', type:'selectLevel',rowCn:'row-3',require:false,options:SourceTypeOptions},
    {title:'缺陷类型', dataIndex:'qxlx', key:'DefectTypes', type:'selectType', rowCn:'row-3',options:OrderTypeOptions},
   
    {title:'派单人', dataIndex:'submitUserIDs', key:'dealWith', type:'selectPeople',options:"",rowCn:'row-3',require:true,options:[]}, 
   
     {title:'缺陷状态', dataIndex:'status',key:'status',type:'statusid',rowCn:'row-3',require:false,options:[],disabled:true},
     {title:'厂站名称', dataIndex:'stationID', key:'Station', type:"selectFactory",options:[],rowCn:"row-1",require:true,station:{}},
   
    {title:"缺陷情况", dataIndex:'description', key:'Defects',type:'textareaFound',rowCn:'row-1',require:false,value:''},
     
]


export const BasicFormDataAddTo = [   //处理
    {title:'项目名称' ,dataIndex:'createUserName', key:'Quot', rowCn:'row-3', require:true, type:'Foundpeople',disabled:false,value:""},
    {title:'签证单编号', dataIndex:'qxdj', key:'DefectLevels', type:'selectLevel',rowCn:'row-3',require:true,options:SourceTypeOptions},
    {title:'签证时间',dataIndex:'DefectsTime', key:'DefectsTime', type:'DataPicker',rowCn:'row-3',require:true,options:[]},
    {title:'签证金额', dataIndex:'qxlx', key:'DefectTypes', type:'selectType', rowCn:'row-3',options:OrderTypeOptions,require:true},
    {title:'供应商',dataIndex:'Dfdw',key:'dfdwData',type:'dfdwFound',options:"",rowCn:'row-3',require:true,options:[]},
    {title:'是否完成', dataIndex:'AccomData', key:'AccomKey', type:'selectTypeFile', rowCn:'row-3',options:OrderTypeOptions,require:true},
    {title:'签证内容', dataIndex:'handleUserID', key:'dealWith', type:'textareaFound',options:"",rowCn:'row-1',require:false,options:[]}, 
    {title:'详细内容', dataIndex:'stationID', key:'Station', type:"textareaFound",options:[],rowCn:"row-1",require:false,station:{}},
    {title:"原因分析", dataIndex:'description', key:'Defects',type:'textareaFound',rowCn:'row-1',require:false,value:''},
    {title:"备注", dataIndex:'Bzhu', key:'beizhu',type:'textareaFound',rowCn:'row-1',require:false,value:''},
    
]
export const AddqzUpload=[
       {title:"文件", dataIndex:'File', key:'FileKey',type:'FileKeytype',rowCn:'row-3',require:false,value:''}
]

export  const FromDataAllSelect = [  //缺陷搜索
    {title:'项目名称',type:'selectType',dataIndex:'Pj_id',rowCn:'row-5',require:false},
    {title:'是否完成', type:'selectLevel',dataIndex:'Accom',rowCn:'row-6',require:false},
    {title:'供应商', type:'department',dataIndex:'dfdw',rowCn:'row-5',require:false}, 
    {title:'缺陷时间', type:'DataPicker',dataIndex:'qzsj',rowCn:'row-5',require:false},
    
]




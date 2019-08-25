const lostPageButtonList = [
    {
        value: '返回首页',
        name: 'index'
    },
    {
        value: '刷新',
        name: 'refresh'
    }
];

const departmentSelectionList = [
    {
        name: '程序开发',
        value: '1',
    },
    {
        name: '前端开发',
        value: '2',
    },
    {
        name: 'UI设计',
        value: '3',
    },
    {
        name: 'APP开发',
        value: '4',
    },
    {
        name: '游戏开发',
        value: '5',
    }
];

const inputList = [
    {
        type: 'input',
        label: '学生姓名',
        placeholder: '非常重要',
        name: 'yourName',
    },
    {
        type: 'input',
        label: '手机号码',
        placeholder: '非常重要',
        name: 'phoneNumber',
    },
    {
        type: 'input',
        label: '年级专业',
        placeholder: '例如，2019级电子信息工程',
        name: 'major',
    },
    {
        type: 'input',
        label: '电子邮箱',
        placeholder: '',
        name: 'email',
    },
    {
        type: 'textarea',
        label: '选择部门',
        placeholder: '不超过80字',
        name: 'ps',
    },
    {
        label: '验证码啊',
        type: 'input',
        placeholder: '请输入验证码',
        name: 'validateCode',
    }
];

const joinUsSelList = [
    {
        value: '加入我们',
        name: 'joinUs'
    },
    {
        value: '查询结果',
        name: 'result'
    }
];

const statusEnumList = {
    '0': {
        value: '未通过',
        type: 'refused',
        borderColor: '#D60E47'
    },
    '1': {
        value: '已完成',
        type: 'passed',
        borderColor: '#58C4FF'
    },
    '2': {
        value: '等待中',
        type: 'pending',
        borderColor: '#A8A8A8'
    }
};

const resultEnumList = ['报名', '初审', '面试', '笔试', '录取'];

const naviList = [
    {
        value: '部门',
        name: 'department',
        top: 1500,
    },
    {
        value: '成员',
        name: 'member',
        top: 2180,
    },
    {
        value: '历史',
        name: 'history',
        top: 2850,
    },
    {
        value: '作品',
        name: 'work',
        top: 3400,
    },
    {
        value: '留言',
        name: 'comment',
        top: 4100,
    },
    {
        value: '加入',
        name: 'joinUs'
    }
];

const selTitleList = [
    {
        description: {
            left: '关于我们',
            right: 'About us',
            down: '耕耘十七载，始终为技术',
            detailed: [
                '爱特工作室成立于2002年，是一个在中国海洋大学信息科学与工程学院院领导主持下，以计算机技术人才培养，网络开发为特色的技术性团体。',
                '自成立以来，爱特以发现人才，培养人才，输送人才为最终目的，现已拥有UI设计、前端开发、程序设计、Android开发、游戏设计五大类方向，数十人的技术团队。优秀的团队文化与良好的技术氛围使爱特能够脱颖而出，经过多年的发展，现已成为海大网络技术的中坚力量！'
            ]
        },
        name: 'aboutUs'
    },
    {
        description: {
            left: '部门介绍',
            right: 'Departments',
            down: '五大门派，总有你热爱',
            detailed: [
                '爱特工作室现在拥有五个部门，分别为：UI设计，前端开发，程序开发，APP开发和游戏开发。',
                '多样的部门满足丰富的兴趣。在这里，不论年龄，不论性别，只要你有一颗学技术的心，爱特工作室总能给予你惊喜！',
            ]
        },
        name: 'departments'
    },
    {
        description: {
            left: '成员介绍',
            right: 'Members',
            down: '一身才华，每刻迸发',
            detailed: [
                '每一届爱特人都身怀绝技，在每一刻都能迸发出奇思妙想。用双手解决一切难题，是极客的通行证。',
                '加入我们，和这些有趣又万能的灵魂在一起，把思考与责任铭记于心，把对技艺的热爱传承下去。'
            ]
        },
        name: 'members'
    },
    {
        description: {
            left: '历史介绍',
            right: 'Zeitgeist',
            down: '玩转技术世界',
            detailed: [
                ''
            ]
        },
        name: 'history'
    },
    {
        description: {
            left: '作品介绍',
            right: 'Works',
            down: '一Code一世界，代码有乾坤',
            detailed: [
                'Coding是我们与世界对话的方式，技术是我们与未来沟通的语言。',
                '用键盘奏起一曲华丽乐章，调度程序去搭建理想的大厦与桥梁。'
            ]
        },
        name: 'works'
    },
    {
        description: {
            left: '留言板',
            right: 'Comments',
            down: '在这里留下你的宝贵意见'
        },
        name: 'comments'
    },
];
const featuresList = [
    {
        title: '团队文化',
        key: 'culture',
        feature: '合作也是艺术',
        content: '爱特一直以聚集和培养培养计算机人才为己任，发掘技术潜力，感受合作乐趣，让项目高效执行，让大家一同进步。'
    },
    {
        title: '优秀创意',
        key: 'creativity',
        feature: '灵感建构未来',
        content: '用创意打磨精巧设计，用智慧实现炫酷交互；用热情呈现高效代码，以交流触碰灵感火花；以创造激发全新想象，用双手创造改变未来。'
    },
    {
        title: '乐在其中',
        key: 'happiness',
        feature: '洞察技术玄机',
        content: '汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以逻辑洞察数据，以细节战胜漏洞。'
    }
];
const departmentList = new Map(
    [['UI设计', 'UI',],
        ['前端开发', 'FrontEnd Develop',],
        ['程序开发', 'BackEnd Develop',],
        ['APP开发', 'Android Develop',],
        ['游戏开发', 'Game Develop',],]
);
const membersList = [
    {
        year: '14',
    },
    {
        year: '15',
    },
    {
        year: '16',
    },
    {
        year: '17',
    },
    {
        year: '18',
    }
];
const historyYearList = [
    '2014', '2015', '2016', '2017', '2018',
];
const groupInfoList = [
    '鲁ICP备XXXXXXXXX号',
    '山东省青岛市',
    '中国海洋大学',
    '信息科学与工程学院B505',
    '@2019ITStudio All Right Reserved'
];
const departIdMap = {
    '1': '程序开发',
    '2': '前端开发',
    '3': 'UI设计',
    '4': 'APP开发',
    '5': '游戏开发',
    '6': '美工',
    '7': '系统维护',
};

export {
    featuresList,
    lostPageButtonList,
    inputList,
    joinUsSelList,
    statusEnumList,
    resultEnumList,
    selTitleList,
    naviList,
    departmentList,
    membersList,
    historyYearList,
    groupInfoList,
    departmentSelectionList,
    departIdMap,
}
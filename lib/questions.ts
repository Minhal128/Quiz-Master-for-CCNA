export interface Question {
  id: number | string;
  question: string;
  options: Record<string, string>;
  correct: string[];
  type: 'single' | 'multiple';
  explanation: string;
  image?: string;
}

export const questionsBank: Question[] = [
  {
    "id": 1,
    "question": "When the Trunk port sends the data frame, how to dealt with?",
    "options": {
      "A": "When the VLAN ID is the same as the PVID of the port and is a VLAN ID allowed by the port, remove the Tag and send the message",
      "B": "When the VLAN ID is different from the PVID of the port, the data frame is dropped",
      "C": "When the VLAN ID is different from the PVID of the port, replace it with PVID forwarding",
      "D": "When the VLAN ID is different from the PVID of the port, strip off the TAG and forward"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide Lecture # 8(VLAN Principles and Configuration), Page # 19"
  },
  {
    "id": 2,
    "question": "How many bits are there in the VLAN ID in the VLAN format defined by the IEEE 802.1Q?",
    "options": {
      "A": "12",
      "B": "6",
      "C": "10",
      "D": "8"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide Lecture # 8(VLAN Principles and Configuration), Page # 19"
  },
  {
    "id": 3,
    "question": "In the network shown in the figure below, the output information of switch A is shown in the figure. Then, in the MAC address table of switch A, which interface does the MAC address of host B correspond to?",
    "options": {
      "A": "GigabitEthernet 0/0/3",
      "B": "GigabitEthernet0/0/2",
      "C": "Eth-Trunk 1",
      "D": "GigabitEthernet0/0/1"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000015892/e54350af/display\ufffeeth-trunk"
  },
  {
    "id": 4,
    "question": "All ports on the root-bridge switch are designated ports.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: (https://support.huawei.com/enterprise/en/doc/EDOC1000017271/bd821590/stp\uffferstpoverview)"
  },
  {
    "id": 5,
    "question": "In the configuration BPDU sent by the switch, which bridge ID is unlikely to appear?",
    "options": {
      "A": "8192 00-01-02-03-04-CC",
      "B": "4096 00-01-02-03-04-CC",
      "C": "0 00-01-02-03-04-CC",
      "D": "2048 00-01-02-03-04-CC"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source:https://support.huawei.com/enterprise/en/doc/EDOC1100086964#:~:text=The%20default%2 0pri ority%20value%20of,elected%20as%20the%20root%20bridge."
  },
  {
    "id": 6,
    "question": "The number of VLANs that can be created using the commands \"vlan batch 10 20\" and \"vlan batch 10 to 20\" respectively is",
    "options": {
      "A": "11 and 11",
      "B": "11 and 2",
      "C": "2 and 2",
      "D": "2 and 11"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide Lecture # 8 (VLAN Principles and Configuration), Page # 31"
  },
  {
    "id": 7,
    "question": "By default, the root path cost of the root bridge in the STP protocol must be 0.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide Lecture # 9 (Basic STP Concepts: RSTP), page # 18"
  },
  {
    "id": 8,
    "question": "The administrator wants all hosts to be unable to access the Internet between 8:00- 17:00 every day, so which ACL rule needs to be bound to the traffic-filter outbound in the GO/0/1 interface allocation?",
    "options": {
      "A": "time-range am9topm5 08:00 to working-day acl number 2003 rule 5 deny time-range am9topjni5",
      "B": "time-range am9topm5 08:00 to 17:00 off-day acl number 2004 rule 5 permit time-range",
      "C": "time-range am9topm5 08:00 to 17:00 daily acl number 2001 rule 5 deny time-range am9topm5",
      "D": "time-range am9topm5 07:00 to 18:00 daily acl number 2002"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justicication Source: Huawei Slide Lecture # 12 (ACL Principles and Configuration), page # 25"
  },
  {
    "id": 9,
    "question": "As shown in the figure below, the wrong statement is:",
    "options": {
      "A": "The host whose source IP address is 200.0.12.4 cannot access the Internet",
      "B": "The host whose source IP address is 200.0.12.2 cannot access the Internet",
      "C": "The host whose source IP address is 200.0.12.8 cannot access the Internet",
      "D": "The host whose source IP address is 200.0.12.6 cannot access the Internet"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Explanation: The ACL rule deny source 200.0.12.0 0.0.0.7 denies access to all hosts with IP addresses in the range from 200.0.12.0 to 200.0.12.7. These hosts cannot access the internet. Therefore, the host with ip address 200.0.12.8 does not belong to this range."
  },
  {
    "id": 10,
    "question": "On Huawei equipment, if you use aaa authentication for authorization. When the remote server does not respond, you can authorize from the network equipment side.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100278979/51916bb/aaa\ufffeanduser-management- configuration"
  },
  {
    "id": 11,
    "question": "What percentage does the DHCP client expect to send the lease renewal message for the first time?",
    "options": {
      "A": "0.5",
      "B": "0.875",
      "C": "1",
      "D": "0.25"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100112351/4b2f29de/how-a\ufffedhcpclient-renews-its-ip- address-lease"
  },
  {
    "id": 12,
    "question": "After the administrator successfully logs in to the router through Telnet, and finds that the router's interface IP address cannot be allocated, the possible reasons are ()",
    "options": {
      "A": "The Telnet user level is incorrectly configured",
      "B": "SNMP parameter is incorrectly configured",
      "C": "The Telnet user authentication mode is incorrectly configured",
      "D": "The administrator uses the telnet terminal software to prohibit the corresponding operation"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Explanation: The reason behind this choice is that user levels in Telnet can restrict the commands a user can execute. If the Telnet user level is set too low, the administrator might not have the necessary permissions to configure or modify the interface settings, including setting IP addresses. This restriction could prevent the allocation or modification of interface IP addresses. Source: Huawei Slide Lecture # 13 (AAA Principles and Configuration), Page # 12"
  },
  {
    "id": 13,
    "question": "vty configuration as shown in the figure, the user authority level is set to level [Huawei]user-interface vty 0 14 [Huawei-ui-vty0-14]acl 2000 inbound [Huawei-ui-vty0-14]user privilege level 3 [Huawei-ui-vty0-14]authentication-mode password Please configure the login password (max length 16):huawei",
    "options": {
      "A": "False",
      "B": "True"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000044778/d5dab65b/configuri ng-the-vty-user- interface#EN-US_TASK_0133019816"
  },
  {
    "id": 14,
    "question": "When AP and AC are on different Layer 3 networks, what method is recommended for AP to discover AC? (Multiple Choice)",
    "options": {
      "A": "Broadcasting method",
      "B": "DNS",
      "C": "DHCP",
      "D": "Manually specified on AP"
    },
    "correct": [
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://www.cisco.com/c/en/us/td/docs/wireless/access_point/cw916x/cw9164/installguide/b\ufffehig- cw9164i/installation-overview.html"
  },
  {
    "id": 15,
    "question": "What frequency does IEEE 802.11n support? (Multiple Choice)",
    "options": {
      "A": "2.5GHz",
      "B": "2.4GHz",
      "C": "5GHz",
      "D": "6GHz"
    },
    "correct": [
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100081215"
  },
  {
    "id": 16,
    "question": "In IPv4 networks, AP supports static and DHCP methods to obtain IP addresses.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://www.cisco.com/c/en/us/td/docs/wireless/access_point/cw916x/cw9164/install\ufffeguide/b-hig-cw9164i/m_installing-your-access-point.html"
  },
  {
    "id": 17,
    "question": "What is the maximum negotiation rate supported by the IEEE 802.11g standard?",
    "options": {
      "A": "300Mbps",
      "B": "150Mbps",
      "C": "54Mbps",
      "D": "1200Mbps"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 16 (WLAN Overview), Page # 8"
  },
  {
    "id": 18,
    "question": "Which WLAN security policies support the link authentication method of Open mode? (Multiple Choice)",
    "options": {
      "A": "WPA2-802.1X",
      "B": "WPA2-PSK",
      "C": "WEP",
      "D": "WPA"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Slide # 16 (WLAN Overview), Page # 45"
  },
  {
    "id": 19,
    "question": "Which of the following SNMP packets are sent to the NMS by the Agent on the managed device?",
    "options": {
      "A": "Set-Request",
      "B": "Get-Request",
      "C": "Get-Next-Request",
      "D": "Response"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 18 (Network Management and OM) Page # 16"
  },
  {
    "id": 20,
    "question": "Which field is added to the IPv6 packet header that is not added to the IPv4 packet header?",
    "options": {
      "A": "Destination Address",
      "B": "Flow Label",
      "C": "Version",
      "D": "Source Address"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178170/490ce67d/ipv6packet\ufffeformat"
  },
  {
    "id": 21,
    "question": "Which of the following statements about RA and RS in IPv6 are correct? (Multiple Choice)",
    "options": {
      "A": "RS is used to reply address prefix information",
      "B": "RA is used to request address prefix information",
      "C": "RS is used to request address prefix information",
      "D": "RA is used to reply address prefix information"
    },
    "correct": [
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Slide Lecture # 19 (IP v6 Basics), Page # 28"
  },
  {
    "id": 22,
    "question": "Telnetlib is a module that implements the Telnet protocol that comes with Python.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 21(Network Programmability and Automation) Page # 24"
  },
  {
    "id": 23,
    "question": "The controller is the core component of SDN. The controller connects to the device through the southbound interface. Which of the following belongs to the controller southbound protocol? (Multiple Choice)",
    "options": {
      "A": "SNMP",
      "B": "PCEP",
      "C": "OpenFlow",
      "D": "NETCONF"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 20 (Introduction to SDN and NFV) Page # 19"
  },
  {
    "id": 24,
    "question": "In the campus network, network reliability can be improved by using link aggregation and stacking technology.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100193624/20c00492/reliabilitydesign# EN- US_TOPIC_0276661504"
  },
  {
    "id": 25,
    "question": "Using the command mkdir test in the VRP operating platform, the system will create a directory named test.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 3 (Huawei VRP) Page # 29"
  },
  {
    "id": 26,
    "question": "As shown in the figure, after the two routers are configured with OSPF, the administrator configures the <silent-interface s0/0/0> command on RTA, then the correct description of the following is (). (Multiple Choice)",
    "options": {
      "A": "The neighbor relationship between the two routers will be down",
      "B": "The neighbor relationship between the two routers will not be affected",
      "C": "RTA will no longer send OSPF packets",
      "D": "RTA will continue to receive, analyze and process OSPF packets sent by RTB"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: When the silent-interface command is applied to an interface on RTA in an OSPF configuration, it causes RTA to stop sending OSPF packets, including Hello packets, which are crucial for establishing and maintaining OSPF neighbor relationships. However, RTA will still listen to and process OSPF packets received on that interface. Therefore, RTA will not form or maintain a neighbor relationship with RTB (option A), it will not send OSPF packets (option C), but it will continue to receive and process OSPF packets from RTB (option D). This confirms why B is incorrect and A, C, D are the correct responses."
  },
  {
    "id": 27,
    "question": "Which of the following statements about the default route are correct? (Multiple Choice)",
    "options": {
      "A": "If the destination address of the message cannot match any other routing entries in the routing table, the router will forward the message according to the default route",
      "B": "There must be a default route in the routing table of any router",
      "C": "The default route can only be manually configured by the administrator",
      "D": "In the routing table, the default route appears as a route to the network 0.0.0.0 (the mask is also 0.0.0.0)"
    },
    "correct": [
      "A",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 5 (IP Routing Basics), Page # 31"
  },
  {
    "id": 28,
    "question": "In the network shown in the figure below, the router receives a data packet with a destination IP address of 11.0.12.1 from host A. After this data packet is forwarded by the router, what are the destination MAC and destination IP?",
    "options": {
      "A": "MAC-C, 11.0.12.1",
      "B": "MAC-D, 10.0.12.2",
      "C": "MAC-D, 11.0.12.1",
      "D": "MAC-B, 11.0.12.1"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Lecture # 5 (IP Routing Basics) Page # 31 Explanation: The correct answer is C: MAC-D, 11.0.12.1. This is because in a network where a router is used, when a packet needs to cross from one network to another (in this case from 10.0.12.1/24 to 11.0.12.1/24), the router's MAC address for the outbound interface (MAC-D) is used as the destination MAC in the forwarded packet."
  },
  {
    "id": 29,
    "question": "In the network shown in the figure below, assuming that all routers enable the OSPF protocol at the same time, which router is the BDR in this network?",
    "options": {
      "A": "Router D",
      "B": "Router B",
      "C": "Router C",
      "D": "Router A"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Explanation: For electing the DR and BDR, we consider the priority of the routers. In the above example, two routers have the highest priority, i.e., 255. Therefore, as both RTA and RTB have the same priority, we now have to consider the router ID. The router with the highest router ID will be considered as DR, which in this case is RTB. Whereas the router with second second-highest router ID will be selected as BDR, which in this case is the RTA."
  },
  {
    "id": 30,
    "question": "There are multiple route entries to the same destination network in the routing table. These routes are called:",
    "options": {
      "A": "Sub-optimal routing",
      "B": "Multi-path routing",
      "C": "Default route",
      "D": "Equal cost routing"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 05 (IP Routing Basics), Page # 39"
  },
  {
    "id": 31,
    "question": "The function of the OSPF hello message is (). (Multiple Choice)",
    "options": {
      "A": "Neighbor discovery",
      "B": "Maintain neighbor relations",
      "C": "Update LSA information",
      "D": "Synchronize the LSDB of the router"
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100082074 Source: Huawei Slide # 06 (OSPF basics), Page # 18"
  },
  {
    "id": 32,
    "question": "The broadcast address is a special address in which the host bits in the network address are all set to 1, and it can also be used as a host address.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 33,
    "question": "Which of the following cannot be the length of the IPv4 packet header?",
    "options": {
      "A": "32B",
      "B": "60B",
      "C": "20B",
      "D": "64B"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 34,
    "question": "In the network shown in the figure, all links are Ethernet links, and all interfaces of all routers run OSPF. How many DRS are elected in the entire network?",
    "options": {
      "A": "4",
      "B": "1",
      "C": "3",
      "D": "2"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Explanation: In the OSPF (Open Shortest Path First) protocol, a Designated Router (DR) is elected on each multiaccess network segment, such as Ethernet. Since the network diagram shows that each link between the routers (RTA, RTB, RTC, RTD) represents a separate Ethernet link and each is considered a multi-access network, a DR will be elected on each of these links. Therefore, there are four separate segments, implying that each segment will elect its own DR. Hence, the total number of DRS elected across the network is"
  },
  {
    "id": 35,
    "question": "In the network shown in the figure below, if Router A and Router B\u2019s loopback O communicate through static routing, which command needs to be entered on Router A?",
    "options": {
      "A": "ip route-static 10.0.2.2 O GigabitEthernet O/O/O",
      "B": "ip route-static 10.0.2.2 32 GigabitEthernet O/O/O",
      "C": "ip route-static 10.0.2.2 255.255.255.255 10.0.12.1",
      "D": "ip route-static 10.0.2.2 255.255.255.255 10.0.12.2"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 36,
    "question": "What is the priority value of the direct route entry?",
    "options": {
      "A": "0",
      "B": "30",
      "C": "10",
      "D": "20"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 37,
    "question": "AS shown in the figure, if host A and host B want to achieve inter-VLAN communication through single-arm routing, which configuration should be done under the GO/O/1.1 interface of RTA?",
    "options": {
      "A": "dotlq termination vid 30",
      "B": "dotlq termination vid 20",
      "C": "dotlq termination vid 10",
      "D": "dotlq termination vid 40"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 38,
    "question": "As shown in the figure, the correct description of this network is ().",
    "options": {
      "A": "There are 6 collision domains in this network",
      "B": "There are 2 broadcast domains in this network",
      "C": "There are 6 broadcast domains in this network",
      "D": "There are 12 conflict domains in this network"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 39,
    "question": "The network administrator created VLAN 10 on the Layer 3 switch and configured an IP address under the virtual interface of the VLAN. When the command \"display ip interface brief\" is used to check the port status, it is found that the VLANIF 10 interface is in the down state. What should be done to restore the VLANIF 10 interface to normal?",
    "options": {
      "A": "Add an interface that must be Up and must be of type Trunk into VLAN 10",
      "B": "Assign any physical interface to VLAN 10",
      "C": "Assign a physical interface that must be up to VLAN 10",
      "D": "Use the command \"undo shutdown\" under the VLANIF 10 interface"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Explanation: When we run the shutdown command on the VLANIF 10 interface, its state is changed to down. In order to recover it, run the undo shutdown command in the VLANIF interface view to start the VLANIF interface, and after that its state will be converted to UP and working."
  },
  {
    "id": 40,
    "question": "The output information of the sub-interface of a router aggregate port 1 is shown in the figure. Based on this information, which of the following statements are correct? (Multiple Choice)",
    "options": {
      "A": "Two links exist on the aggregate port",
      "B": "The IP address of the sub-interface of the aggregate port is 10.0.12.2/24",
      "C": "The sub-interface number of the aggregate port is 100",
      "D": "The sub-interface of the aggregate port carries VLAN TAG 100 when forwarding data frames"
    },
    "correct": [
      "A",
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: The output lists two active (GigabitEthernetO/O/1 and GigabitEthernetO/O/2) under the aggregate port, indicating two links are present. The output explicitly states that the IP address for EthTrunk1. iS 10.0.12.2/24.The sub-interface number of the aggregate port is 1m - The interface name 'Eth-Trunk1.10 indicates the sub-interface number is 100."
  },
  {
    "id": 41,
    "question": "As shown in the figure below, suppose the MAC address table of SWA is as follows. Now host A sends a data frame with the destination MAC address MAC-B. Which of the following statements is correct?",
    "options": {
      "A": "Forward this data frame from port GO/O/2",
      "B": "Forward this data frame port GO/O/3",
      "C": "STA discards the data frame",
      "D": "Flood this data frame"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Explanation: When Host A sends a data frame to Host B, the switch (SWA) uses its MAC address table to determine the outgoing port. Since the MAC address table of SWA shows that the MAC address of Host B (MAC-B) is associated with port GO/O/2, the switch will specifically forward the data frame to this port."
  },
  {
    "id": 42,
    "question": "Which of the following is not included in AAA?",
    "options": {
      "A": "Authentication",
      "B": "Accounting",
      "C": "Authorization",
      "D": "Audit"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide Lecture # 13 (AAA Principles and Configuration) Page # 2"
  },
  {
    "id": 43,
    "question": "On Huawei ARG3 series routers, what authentication modes does AAA support?",
    "options": {
      "A": "802.1x",
      "B": "Local",
      "C": "None",
      "D": "HWTACACS"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 13 (AAA Principles and Configuration), Page # 8"
  },
  {
    "id": 44,
    "question": "Which of the following protocols consists of the PPP protocol? (Multiple Choice)",
    "options": {
      "A": "LCP",
      "B": "PPP0E",
      "C": "NCP",
      "D": "Authentication protocol"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://forum.huawei.com/enterprise/intl/en/thread/configuring-pppoe-users\ufffeconnected-to-lac-headquarters-over\ufffel2tp/667218205573267457?blogId=667218205573267457"
  },
  {
    "id": 45,
    "question": "Which of the following statements but Prefix is wrong?",
    "options": {
      "A": "Prefix Segment spreads to network elements through the IGP, which is globally visible and effective",
      "B": "The Prefix Segment needs to be configured manually.",
      "C": "Prefix Segment is used to identify a destination address prefix in he network (prefix).",
      "D": "Prefix Segment can be automatically allocated by the IGP"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000173015"
  },
  {
    "id": 46,
    "question": "The output information of a certain device is shown in the figure. Which of the following statements is correct? (Multiple Choice)",
    "options": {
      "A": "The IP address of the interface is 10.0.12.2/24",
      "B": "The MAC address of the interface is 00e0-fc22-4fff",
      "C": "The working rate of this interface is 1 Gbps",
      "D": "The MTU value of this interface is 1000"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: The IP address is explicitly list under the interface confirming the IP configuration. The MAC address is directly given as 'OeO-fc22-4fff,\" indicating the MAC address Of the interface. The Maximum Transmit Unit (MTU) specified for the interface is 10, clearly stated in the output, Option C is incorrect as the output mentions \"Speed: 100,\" suggesting the interface is operating at Mbps, not 1 Gbps."
  },
  {
    "id": 47,
    "question": "1n the OSI reference complete end-to-end error detection and control?",
    "options": {
      "A": "Physical layer",
      "B": "Data Enk layer",
      "C": "Network layer",
      "D": "Transport layer"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 48,
    "question": "In the network shown in the figure below, all routers run OSPF protocol. Above the link is the value of the Cost value, then the path for RTA to reach the network 10.0.0 0/8 is:",
    "options": {
      "A": "A-B-D",
      "B": "RTA cannot reach 10.0.0.0/8",
      "C": "A-C-D",
      "D": "A-D"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100313446"
  },
  {
    "id": 49,
    "question": "Which of the following statements is correct?",
    "options": {
      "A": "The router works at the physical layer",
      "B": "The switch works at the physical layer",
      "C": "The switch works at the network layer",
      "D": "The router works at the network layer"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 50,
    "question": "Which of the following description about the Layer 2 Ethernet switch is correct?",
    "options": {
      "A": "It is necessary to make certain modifications to the layer 3 header of the forwarded message, and then forward it",
      "B": "Able to learn MAC address",
      "C": "Forward according to the Layer 2 header information of the Ethernet frame",
      "D": "Layer 2 Ethernet switches work at the data link layer"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 51,
    "question": "As shown in the information in the figure, when learning this switch needs to forward the frame with the destination MAC address of 5489-98ec-f011, which of the following description is correct?",
    "options": {
      "A": "The switch will flood the frame on all ports except the port that received the frame",
      "B": "The switch will send a message that the destination is unreachable to the source device",
      "C": "The switch does not find a matching entry in the MAC address table, so it will discard the frame",
      "D": "The switch needs to send a request to discover the device with the MAC address of 5489 98ec\ufffef011"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 52,
    "question": "What is the range of VLAN ID that users can use?",
    "options": {
      "A": "l-4096",
      "B": "1-4094",
      "C": "0-4096",
      "D": "0-4095"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100278261/55c108dd/crea?ngand\ufffedele?ng-a-vlan"
  },
  {
    "id": 53,
    "question": "By default, in the SNMP protocol, which does the agent process use to send alarm messages to NS?",
    "options": {
      "A": "164",
      "B": "163",
      "C": "162",
      "D": "161"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000060766/e35b53a6/snmpport\ufffenumbers"
  },
  {
    "id": 54,
    "question": "As shown in the figure below, router A has Telnet router B through IP address 10.0.12.2. In the current interface, which of the following operations will cause the Telnet session of Router A and Router B to be interrupted? (Multiple Choice)",
    "options": {
      "A": "Modify the IP address G0/0/1 interface",
      "B": "Close G0/0/1 interface",
      "C": "Configure static routing",
      "D": "Enable OSPF protocol under G/0/0/1 interface"
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: Modifying the IP address of the GO/O/I interface (Option A) or closing it (Option B) directly disrupts the network path used by the Telnet session Router A and Router B. Changing the IP address alters the routing path, making the current connection invalid, while closing the interface terminates all data transmission, effectively severing the connection immediately. Both actions result in an immediate loss of connectivity for the Telnet session. Source: Huawei Lecture # 6 (OSPF basics), Page # 17"
  },
  {
    "id": 55,
    "question": "What is the port number used by the FTP protocol control plane?",
    "options": {
      "A": "23",
      "B": "24",
      "C": "21",
      "D": "22"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 56,
    "question": "There is no channel overlap in the 14 available frequency bands in the 2.4 GHz frequency band.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000113315/2d2a4a3c/frequency\ufffebandand-channel"
  },
  {
    "id": 57,
    "question": "After the link authentication is completed, the STA will continue to initiate link negotiation. Which of the following messages is used to achieve the specific negotiation?",
    "options": {
      "A": "Join",
      "B": "Handshake",
      "C": "Association",
      "D": "Negotiate"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100033726/e88c00c0/sta\ufffeaccess"
  },
  {
    "id": 58,
    "question": "The Layer 2 networking of WLAN means that the STA uses the AP as its gateway.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000069520/82ee2e5b/standalone-ac\ufffesolution-core-switches-and-acs-function-as-the-gateways-for-wired-and-wireless-users\uffferespectively"
  },
  {
    "id": 59,
    "question": "What is the IEEE802.11 standard corresponding to Wi-F16?",
    "options": {
      "A": "802.11au",
      "B": "802.11ax",
      "C": "802.11at",
      "D": "802.11ac"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 60,
    "question": "Which of the following working modes are supported by Huawei Enterprise AP? (Multiple Choice)",
    "options": {
      "A": "Local",
      "B": "Cloud",
      "C": "FIT",
      "D": "FAT"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification"
  },
  {
    "id": 61,
    "question": "Which of the following statements Adjacency Segment is wrong?",
    "options": {
      "A": "Adjacency Segment is identified by Adjacency Segment ID (SID)",
      "B": "Adjacency Segment spreads to other network elements through IGP protocol, which is visible globally and effective locally",
      "C": "The adjacency Segment must be configured manually",
      "D": "Adjacency Segment is used to identify the adjacency of a node in the network"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 62,
    "question": "If during the PPP authentication process, the authenticator sends the wrong name to the authenticator, what type of message will the authenticator send to the authenticator?",
    "options": {
      "A": "Authenticate-Reject",
      "B": "Authenticate-Ack",
      "C": "Authenticate-Nak",
      "D": "Authenticate-Reply"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 63,
    "question": "Which version of the SNMP protocol below supports encryption features?",
    "options": {
      "A": "SNMPv3",
      "B": "SNMPv2c",
      "C": "SNMPv1",
      "D": "SNMPv2"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 64,
    "question": "SNMPv1 defines 5 protocol operations.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 65,
    "question": "The IPv6 address ABEF: 224E: FFE2: BCCO: COO: DDBE: 8058 cannot be abbreviated.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 66,
    "question": "The DHCPv6 server supports providing other configuration information as a DNS server address, for the host.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 67,
    "question": "Which planes of the following does a network device have? (Multiple choice)",
    "options": {
      "A": "Control plane",
      "B": "Business plane",
      "C": "Data plane",
      "D": "Management plane"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification"
  },
  {
    "id": 68,
    "question": "Virtualization is the basis for the realization of NEV. Which of the following statements about the characteristics of virtualization is correct? (Multiple choice)",
    "options": {
      "A": "Hardware independence: virtual machine and hardware support virtual machine servers.",
      "B": "Encapsulation: A1 virtual machines share the operating system, and encapsulation is through name spaces.",
      "C": "Isolation: The virtual machines on the same physical server are isolated from each other.",
      "D": "Partition: You can run multiple virtual machines on a single physical server at the same time."
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification"
  },
  {
    "id": 69,
    "question": "The output information of the router R1 routing table is shown in the figure. Which of the following statements is correct? (Multiple Choice)",
    "options": {
      "A": "The router will discard data packets whose destination network is 11.0.0.0/8",
      "B": "The router will forward data packets whose destination network is 12.0.0.0/8",
      "C": "The data packet whose destination network is 11.0.0.0/8 will be forwarded from the router\u2019s GigabitEthernet0/0/0 interface",
      "D": "The data packet whose destination network is 12.0.0.0/8 will be forwarded from the router\u2019s Ethernet0/0/0 interface"
    },
    "correct": [
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: \u2022 Option B: The router will forward data packets whose destination network is 12.0.0.0/8. This is assumed correct based on typical routing behavior where packets are forwarded unless explicitly denied or unmatched. \u2022 Option C: The data packet whose destination network is 11.0.0.0/8 will be forwarded from the router\u2019s GigabitEthernet0/0/0 interface. This is directly confirmed by the routing table showing an entry for 11.0.0.0/8 with the next hop via GigabitEthernet0/0/0."
  },
  {
    "id": 70,
    "question": "Which of the following descriptions about the Router ID of OSPF is incorrect? (Multiple Choice)",
    "options": {
      "A": "Router ID must be the IP address of an Interface on the router",
      "B": "The prerequisite for the normal operation of the OSPF protocol is that the router has a Router ID",
      "C": "The Router ID must be manually configured",
      "D": "The Router ID must be the same in the same area, and the Router ID in different areas can be different"
    },
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification"
  },
  {
    "id": 71,
    "question": "Which of the following statements about direct routing is correct?",
    "options": {
      "A": "Direct routing requires the administrator to manually configure the destination network and the next-hop address",
      "B": "The direct route has lower priority than the static route",
      "C": "Direct route priority is lower than dynamic route",
      "D": "Direct routing has the highest priority."
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 72,
    "question": "What are the advantages of the OSPF protocol? (Multiple Choice)",
    "options": {
      "A": "Division of support areas",
      "B": "OSPF supports load sharing for equal-cost routes",
      "C": "OSPF supports message authentication",
      "D": "OSPF supports type-less inter-domain routing (CIDR)"
    },
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification"
  },
  {
    "id": 73,
    "question": "The route entry 10.0.0.24/29 may be aggregated from which of the following subnet routes? (Multiple Choice)",
    "options": {
      "A": "10.0.0.26/30",
      "B": "10.0.0.23/30",
      "C": "10.0.0.24/30",
      "D": "10.0.0.28/30"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: \u2022 The route entry 10.0.0.24/29 covers the IP range from 10.0.0.24 to 10.0.0.31. \u2022 Analyzing the options subnets 10.0.0.26/30, 10.0.0.24/30, and 10.0.0.28/30 fit entirely within this range. \u2022 Therefore, the correct options are A, C, D."
  },
  {
    "id": 74,
    "question": "When OSPF routers form a 2-WAY relationship, the LSDB has been synchronized.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 75,
    "question": "If the Protocol of a certain route in the routing table is Direct, the priority of this route is set to 0.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 76,
    "question": "What are the network types supported by the OSPF protocol? (Multiple Choice)",
    "options": {
      "A": "Point-to-Point",
      "B": "Non-Broadcast Multi-Access",
      "C": "Point-to-Multi-point",
      "D": "Broadcast"
    },
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification"
  },
  {
    "id": 77,
    "question": "The election of the root switch in STP only compares the switch priority, while in RSTP, the switch priority and MAC address are compared at the same time.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 78,
    "question": "Which of the following is not the reason for RSTP improving the convergence speed?",
    "options": {
      "A": "Introduction of edge ports",
      "B": "Fast switching of the root port",
      "C": "P/A mechanism",
      "D": "Forward Delay canceled"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 79,
    "question": "The IP addresses of the VLANIF interfaces of the same switch cannot be the same.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 80,
    "question": "The MAC address table of the existing switch is shown in the figure. Which of the following statements are correct?",
    "options": {
      "A": "When the switch restarts, the MAC address learned by port Eth0/2 does not need to be relearned.",
      "B": "When the switch restarts, the MAC address learned by port Eth0/3 needs to be learned again.",
      "C": "The data frame with the source MAC address of 5489-9811-bd49 and the destination MAC address of 5489-989d-1d30 received from the port is forwarded from the Eth0/2 port.",
      "D": "The data frame with the source MAC address of 5489-9885-18a8 and the destination MAC address of 5489-989d-1d30 received from the port is forwarded from the Eth0/1 port."
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Explanation: This statement would be true as the MAC address table shows that the destination MAC address 5489-989d-1d30 is associated with Eth0/1. If the switch knows that the destination MAC is located on Eth0/1, it will forward the frame through that port."
  },
  {
    "id": 81,
    "question": "The MAC address table of a certain switch is shown in the figure. If the switch receives a data frame with a destination on MIAC of 5489-9885-18a8 from port Eth0/0/2, which of the following statements is correct?",
    "options": {
      "A": "Forward this data frame from Eth0/0/1 port",
      "B": "Flood this data frame",
      "C": "Discard this data frame",
      "D": "Forward this data frame from the Eth0/0/2 port"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Explanation: This statement would be true as the MAC address table shows that the destination MAC address 5489 9885-18a8 is associated with Eth0/0/2. If the switch knows that the destination on the MAC is located on Eth0/0/2, it will forward the frame through that port."
  },
  {
    "id": 82,
    "question": "The switch G0/0/1 port configuration information is shown in the figure. Which VLAN data frame does the switch forward without a VLAN tag? # interface GigabitEthernet0/0/1 port link-type trunk port trunk pvid vlan 10 port trunk allow-pass vlan 10 20 30 3040 #",
    "options": {
      "A": "10",
      "B": "30",
      "C": "20",
      "D": "40"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Explanation: The correct answer is 10, because VLAN 10 is explicitly configured as the native VLAN on this trunk port, and thus, it is the VLAN whose traffic is forwarded without a VLAN tag."
  },
  {
    "id": 83,
    "question": "When the Access type port sends a message, it will ().",
    "options": {
      "A": "Send messages with a tag",
      "B": "Strip the VLAN information of the message, and then send it out",
      "C": "Type the PVID information of this port, and then send it out.",
      "D": "Add the ZLAN message to the message, and then send it out"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 84,
    "question": "The configuration information of a certain port of the switch is shown in the figure. This port carries a VLAN tag when sending data frames carrying which VLAN? # interface GigabitEthernet0/0/1 port hybrid tagged vlan 2 to 3 100 port hybrid untagged vlan 4 6 #",
    "options": {
      "A": "1, 2, 3, 100",
      "B": "2, 3, 100",
      "C": "1, 2, 3, 4, 6, 100",
      "D": "2, 3, 4, 6, 100"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Explanation: The correct answer is B. 2, 3, 100, which aligns with the configuration specifying that VLANs 2, 3, and 100 are tagged. This means that data frames associated with these VLANs will include the VLAN tag when sent from this port. VLANs 4 and 6, however, will send untagged frames as per the configuration."
  },
  {
    "id": 85,
    "question": "What is the value of the field in the RSTP configuration BPDU message?",
    "options": {
      "A": "Ox01",
      "B": "ox00",
      "C": "ox02",
      "D": "ox03"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 86,
    "question": "The Priority field in the VLAN tag can identify the priority of the data frame. What is the range of this priority?",
    "options": {
      "A": "0-15",
      "B": "0-63",
      "C": "0-3",
      "D": "0-7"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 87,
    "question": "What elements can NAPT convert?",
    "options": {
      "A": "Only the MAC address",
      "B": "IP address + port number",
      "C": "MAC address + port number",
      "D": "Only IP address"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 88,
    "question": "In the network shown in the figure below, from a security perspective, router A refuses to receive OSPF packets and ICMP packets received from the GigabitEthernet0/0/1 interface. Which of the following commands can achieve this requirement? (Multiple Choice)",
    "options": {
      "A": "acl number 3000 rule 5 deny ospf rule 10 deny icmp # interface GigabitEthernet0/0/1 traffic-filter inbound acl 300o #",
      "B": "acl number 2000 rule 5 deny 89 Rule 10 deny 1 # interface GigabitEthernet0/0/1 traffic-filter inbound ac1 2000 #",
      "C": "acl number 300o rule 5 deny 89 rule 10 deny icmp # interface GigabitEthernet0/0/1 traffic-filter inbound acl 30oo #",
      "D": "acl number 3000 rule 5 deny 89 rule 10 deny 1 interface GigabitEthernet0/0/1 traffic-filter inbound acl 3000"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: Options A, C, and D provide correct configurations that meet the requirement to deny OSPF and ICMP packets. They include specific rules for denying these protocols and correctly applying these ACLs to the interface GigabitEthernet0/0/1. Each option utilizes either protocol names or numbers correctly and ensures the ACL is applied to the interface from where OSPF and ICMP packets should be blocked."
  },
  {
    "id": 89,
    "question": "As shown in the figure, there is a web server in the private network that needs to provide HITRP services to public network users. Therefore, the network administrator needs to configure NAT on the gateway router RTA to achieve the requirements. Which of the following configurations can meet the requirement?",
    "options": {
      "A": "RTA-Gigabitethernet0/0/1]nat server protocol tcp global 192.168.1.1 www inside 202.10.10.18080",
      "B": "[RTA-Seria11/0/1]nat server protocol tcp global 192.168.1.1 www inside 202.10.10.1 8080",
      "C": "[RTA-Gigabitethernet0/0/1Jnat server protocol tcp global 202.10.10.1 www inside 192.168.1.18080",
      "D": "[RTA-Serial 1/0/1]nat server protocol tcp global 202.10.10.1 www inside 192.168.1.1 8080"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064352/e7aab215/nat\ufffeserver"
  },
  {
    "id": 90,
    "question": "A network engineer receives the error message \"Error: Unrecognized command found at \u2018^\u2019 position\" when entering a command. Which of the following correctly describes the issue?",
    "options": {
      "A": "The input command is incomplete",
      "B": "Wrong parameter type",
      "C": "No keyword found",
      "D": "Input command is not clear"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 3, Page # 24"
  },
  {
    "id": 91,
    "question": "<huawei>system-view [huawei]command-privilege level 3 view user save The correct statement about the above configuration command is:",
    "options": {
      "A": "Modify the user's authority level to 3, and save the configuration",
      "B": "Modify the permission level of the user view command to 3, and save the configuration",
      "C": "Modify the authority level of the save command used by a user to 3",
      "D": "Modify the permission level of the save command in the user view to 3"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: command-privilege level - CX91x Series Switch Modules V100R001C00 Command Reference 15 - Huawei"
  },
  {
    "id": 92,
    "question": "Which of the following descriptions about the switch is wrong?",
    "options": {
      "A": "The switch can complete the exchange of data frames",
      "B": "The switch can provide network access services for terminal equipment (PC, Server)",
      "C": "Switches generally work at the data link layer",
      "D": "Switches are generally used as network export equipment"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Explanation: Option A is correct about the switch. Source: Lecture # 1, Page # 12 Option B is correct about the switch. Option C is also correct about the switch."
  },
  {
    "id": 93,
    "question": "Which of the following descriptions about firewalls is wrong?",
    "options": {
      "A": "Firewall can realize user identity authentication",
      "B": "Firewall can realize access control between different networks",
      "C": "Firewall can isolate networks with different security levels",
      "D": "The firewall cannot achieve network address translation"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 1, Page # 14"
  },
  {
    "id": 94,
    "question": "What kind of message does the OSPF protocol use to discover and maintain neighbor relationship?",
    "options": {
      "A": "DD",
      "B": "LSR",
      "C": "LSU",
      "D": "HELLO"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 6, Page # 17"
  },
  {
    "id": 95,
    "question": "On the VRP platform, the default protocol priority of routes in the direct routing, static routing, RIP, OSPF area is:",
    "options": {
      "A": "Direct routing, OSPF, Static routing, RIP",
      "B": "Direct routing, Static routing, RIP, OSPF",
      "C": "Direct routing, RIP, Static routing, OSPF",
      "D": "Direct routing, OSPF, RIP, Static routing"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: support.huawei.com/enterprise/en/doc/EDOC1000047418/e3a3303d/routing\ufffeprotocol-preference"
  },
  {
    "id": 96,
    "question": "In the network shown in the figure below, the host has an ARP cache, and host A sends a packet to host B. What are the destination MAC and destination IP of this packet?",
    "options": {
      "A": "MAC-B, 11.0.12.1",
      "B": "MAC-D, 11.0.12.1",
      "C": "MAC-C, 10.0.12.2",
      "D": "MAC-A, 11.0.12.1"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei eNSP"
  },
  {
    "id": 97,
    "question": "On Huawei routers, what is the default value of the OSPF protocol internal routing priority?",
    "options": {
      "A": "20",
      "B": "10",
      "C": "30",
      "D": "0"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 5, Page # 18"
  },
  {
    "id": 98,
    "question": "Now there are the following four segments: 10.24.0.0/24, 10.24.1.0/24, 10.24.2.0/24, 10.24.3.0/24, which route can point to these four network segments at the same time? (Multiple Choice)",
    "options": {
      "A": "10.24.1.0/23",
      "B": "0.0.0.0/0",
      "C": "10.24.0.0/22",
      "D": "10.24.0.0/21"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification"
  },
  {
    "id": 99,
    "question": "Which fields in the IPv4 header are related to fragmentation? (Multiple Choice)",
    "options": {
      "A": "TTL",
      "B": "Fragment Offset",
      "C": "Identification",
      "D": "Flags"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 4, Page # 9 Source: support.huawei.com/enterprise/en/doc/EDOC1100112351/dd76ea1f/ipv4-packet\ufffeformat"
  },
  {
    "id": 100,
    "question": "As shown in the figure below, which of the following statements are correct?",
    "options": {
      "A": "Host A can ping host B",
      "B": "Host A and Host B cannot obtain each other's MAC address",
      "C": "The following entry 10.0.12.5 MAC-B exists in the ARP cache of host A",
      "D": "The broadcast address of host A and host B are the same"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 2, Page # 29 Source: Verified in eNSP:"
  },
  {
    "id": 101,
    "question": "As the figure shown: (Multiple Choice)",
    "options": {
      "A": "Client3 belongs to VLAN30, and the command for dividing VLAN on the switch is correct",
      "B": "Client4 belongs to VLAN40, and the command for dividing VLAN on the switch is correct",
      "C": "Client2 belongs to VLAN20, and the switch based on the MAC address division command is correct",
      "D": "Client1 belongs to VLAN10, and the command for dividing VLAN on the switch is correct"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 4, Page # 9 Dividing a LAN into VLANs Based on MAC Addresses:"
  },
  {
    "id": 102,
    "question": "The load sharing mode at both ends of the Eth-Trunk can be inconsistent.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Configuring and Troubleshooting Eth-Trunks for S5700 Switches - Huawei"
  },
  {
    "id": 103,
    "question": "When Huawei switches allow STP, the priority of the switch is by default:",
    "options": {
      "A": "32768",
      "B": "8192",
      "C": "16384",
      "D": "4096"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 9, Page # 13"
  },
  {
    "id": 104,
    "question": "As shown in the figure, the switch runs STP with default parameters, which of the following ports will be elected as the designated port?",
    "options": {
      "A": "GO/0/1 port of switch A",
      "B": "Port GO/0/2 of switch A",
      "C": "HUB's GO/0/1 port",
      "D": "HUB's GO/0/2 port"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture 9, page # 15,16 Explanation: Since both ports are on the same switch, the bridge ID is the same, therefore the selection falls to the port ID. Port IDs are numerically assigned based on the interface number. G0/0/1 has a lower numerical value than G0/0/2."
  },
  {
    "id": 105,
    "question": "What is the Solicited-node multicast address corresponding to IPv6 address 2019::8:AB?",
    "options": {
      "A": "FF02::1::FF08:AB",
      "B": "FF02::FF08:AB",
      "C": "FF02::1::FF20:19",
      "D": "FF02::1::FE08:AB"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Understanding IPv6 - Wireless Access Controller (AC and Fit AP) V200R020C00 CLI-based Configuration Guide - Huawei"
  },
  {
    "id": 106,
    "question": "For the description of the PPP link establishment process, which of the following statement is wrong?",
    "options": {
      "A": "In the Establish phase, the PPP link performs LCP parameter negotiation. The negotiation content includes the maximum receiving unit MRU, authentication method, magic word and other options.",
      "B": "After the NCP negotiation is successful, the PPP link will maintain the communication state and enter the Terminate phase.",
      "C": "The Dead phase is also called the physical layer unavailable phase. When the two ends of the communication detect that the physical line is activated, they will migrate from the Dead phase to the Establish phase, which is the link establishment phase.",
      "D": "In the Network phase, the PPP link performs NCP negotiation. Select and configure a network layer protocol through NCP negotiation, and negotiate network layer parameters E. PPP link supports half-duplex and full-duplex modes"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 17, Page # 10"
  },
  {
    "id": 107,
    "question": "Which statement about SNMP protocol is correct?",
    "options": {
      "A": "SNMP uses UDP as the transport layer protocol",
      "B": "SNMP uses ICMP as the network layer protocol",
      "C": "SNMP protocol uses multicast to send management messages",
      "D": "The SNMP protocol only supports the sending of flash management messages on the Ethernet link"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: SNMP-based Network Management - HUAWEI Bar 500, Box 500, Box 700, Box 900, Board 20.0.0 MIB Reference - Huawei"
  },
  {
    "id": 108,
    "question": "Which of the following commands can be used to view the router's CPU usage?",
    "options": {
      "A": "display cpu-state",
      "B": "display interface",
      "C": "display memory",
      "D": "display cpu-usage"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Displaying the CPU Usage - S1720, S2700, S5700, and S6720 V200R011C10 Configuration Guide - Device Management - Huawei"
  },
  {
    "id": 109,
    "question": "Which of the following messages are used for IPv6 stateless address autoconfiguration? (Multiple Choice)",
    "options": {
      "A": "NS",
      "B": "RA",
      "C": "NA",
      "D": "RS"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 19, Page # 23"
  },
  {
    "id": 110,
    "question": "Which of the following IPv6 addresses is a multicast address?",
    "options": {
      "A": "FE80::2E0:FCFF:FEEF:FEC",
      "B": "FC00::2E0:FCFF:FEEF:FEC",
      "C": "FF02::2E0:FCFF:FEEF:FEC",
      "D": "2000::2E0:FCFF:FEEF:FEC"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 19, Page # 17"
  },
  {
    "id": 111,
    "question": "Which of the following statements about IPv6 address configuration are correct? (Multiple Choice)",
    "options": {
      "A": "IPv6 supports stateless automatic configuration",
      "B": "IPv6 address supports automatic configuration in multiple ways",
      "C": "IPv6 supports DHCPv6 for address configuration",
      "D": "IPv6 address can only be configured manually"
    },
    "correct": [
      "A",
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 19, Page # 23"
  },
  {
    "id": 112,
    "question": "A device has been configured to complete the Telnet configuration. The device login address is 10.1.1.10. The Telnet user name is admin and the password is Huawei@123. Which of the following is the correct way to log in to this device using telnetlib?",
    "options": {
      "A": "telnetlib.Telnet(10.1.1.10,23,admin,Huawei@123)",
      "B": "telnetlib.Telnet(10.1.1.0)",
      "C": "telnetlib.Telnet(10.1.1.0,23,Huawei@123)",
      "D": "telnetlib.Telnet(10.1.1.0,admin)"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Even though the username and password are not directly used as parameters, they are needed for login. Therefore, op on A is correct. One example of login using telnetlib is as follows: Source: Python - Telnet to Huawei routers with script - Huawei Enterprise Support Community"
  },
  {
    "id": 113,
    "question": "The classic network forwarding method is based on router routing table forwarding. The forwarding method of OpenFlow switches is based on flow table forwarding. Which of these two forwarding methods are correct? (Multiple Choice)",
    "options": {
      "A": "The routing table is of fixed length. A device can only have one public routing table",
      "B": "The flow table is variable length. A network device can only have one flow table",
      "C": "The matching method of the flow table is to match the MAC address and IP address of the traffic at the same time",
      "D": "The matching method of the address table is to match the route of the destination network segment with the longest mask"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: IP Routing Basics - Huawei Explanation: A. The routing table is of fixed length. A device can only have one public routing table True. Traditional routing tables in routers are typically fixed in terms of the structure of the entries, where each entry consists of a destination network, the associated mask, the next-hop IP address, and possibly some other fixed parameters. While the size of the routing table (number of entries) can grow, the structure is fixed.In traditional routing architectures, there is generally one main routing table that the device uses to make forwarding decisions. B. The flow table is variable length. A network device can only have one flow table False.In OpenFlow switches, flow tables can be of variable length, meaning the number of entries can vary based on the flows configured.However, a single network device can have multiple flow tables, allowing for complex packet processing pipelines where packets can be matched against multiple tables in sequence. C. The matching method of the flow table is to match the MAC address and IP address of the traffic at the same time True.OpenFlow flow tables allow for matching on multiple fields within packet headers, including both MAC addresses and IP addresses, as well as other parameters like VLAN tags, IP protocols, TCP/UDP ports, etc. This flexibility allows OpenFlow switches to perform detailed packet classification and forwarding based on multiple header fields simultaneously. D. The matching method of the address table is to match the route of the destination network segment with the longest mask True."
  },
  {
    "id": 114,
    "question": "The router running OSPF can reach the FULL state after LSDB synchronization is completed.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 6, Page # 23"
  },
  {
    "id": 115,
    "question": "In the OSPF broadcast network, which routers will a Dothter router exchange link state information with? (Multiple Choice)",
    "options": {
      "A": "BDR",
      "B": "All OSPF neighbors",
      "C": "DR Other",
      "D": "DR"
    },
    "correct": [
      "A",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Fundamentals of OSPF - S1720, S2700, S5700, and S6720 V200R011C10 Configuration Guide - IP Unicast Routing - Huawei"
  },
  {
    "id": 116,
    "question": "Which of the following IPv4 addresses the host uses cannot directly access the Internet?",
    "options": {
      "A": "100.1.1.1",
      "B": "50.1.1.1",
      "C": "10.1.1.1",
      "D": "200.1.1.1"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: What is IPv4 - Huawei"
  },
  {
    "id": 117,
    "question": "What kind of message does the OSPF protocol use to confirm the received LSU message?",
    "options": {
      "A": "LSU",
      "B": "LSR",
      "C": "LSACK",
      "D": "LSA"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 6, Page # 27"
  },
  {
    "id": 118,
    "question": "The link aggregation interface can only be used as a Layer 2 interface.",
    "options": {
      "A": "TRUE",
      "B": "FALSE"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Creating an Eth-Trunk Interface and Configure a Link Aggregation Mode for It - NetEngine AR5700, AR6700, and AR8000 V600R023C00 Configuration Guide - Ethernet Switching Configuration - Huawei"
  },
  {
    "id": 119,
    "question": "The RSTP protocol uses the PIA mechanism to speed up the speed of the upstream port to the Forwarding state, but what is the reason why there is no temporary loop?",
    "options": {
      "A": "Speed up port role election",
      "B": "Through the synchronization mechanism to ensure that no temporary loop occurs",
      "C": "Edge ports are introduced",
      "D": "Shorten the time of Forward Delay"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Explanation: In Rapid Spanning Tree Protocol (RSTP), synchronization ensures that no temporary loops occur during rapid transitions. When a switch receives a proposal for a new root port, it blocks all its designated ports before acknowledging the proposal. This process ensures that no loops are formed during topology changes. The synchronization mechanism allows RSTP to achieve rapid convergence while maintaining a loop-free topology. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100378012/b4e804a4/understanding\ufffestp-rstp"
  },
  {
    "id": 120,
    "question": "Which of the following statements about router-on-a-stick are correct?",
    "options": {
      "A": "Use only one physical link connection between the switch and the router",
      "B": "Need to create a sub-interface on the router",
      "C": "One physical connection per VLAN",
      "D": "On the switch, configure the port connected to the router as a Trunk port, and allow frames of the relevant VLAN to pass"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000138063/516eb78d/example-for\ufffeconfiguring-sub-interfaces-to-implement-inter-vlan-communication"
  },
  {
    "id": 121,
    "question": "After the system restarts the static MAC address table, the saved entries will not be lost.",
    "options": {
      "A": "TRUE",
      "B": "FALSE"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100277053/9ef704bd/configuring-a\ufffesta?c-macaddress-entry"
  },
  {
    "id": 122,
    "question": "As shown in the figure below, the MAC address table of SWA is as follows. The switch can't learn the MAC address of HOST A all the time. Which of the following is impossible?",
    "options": {
      "A": "The GO/O/I port of the switch has disabled MAC address learning",
      "B": "SWA tums off the MAC address learning function of the VLAN to which host A belongs",
      "C": "HOST A did not send any data frames",
      "D": "The GO/O/I port of the switch is set to ACCESS mode"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Explanation: A. If MAC learning is disabled on the port, the switch cannot learn MAC addresses \u2192 Possible. B. If MAC learning is disabled on the VLAN, MAC addresses won't be learned \u2192 Possible. C. If Host A sends no frames, SWA can't learn its MAC address \u2192 Possible. D. Access mode just means the port belongs to a single VLAN; it does NOT stop MAC address learning \u2192 Impossible (MAC learning still works in access mode). The switch (SWA) cannot learn the MAC address of Host A. This suggests that SWA is not receiving frames from Host A. If the G0/0/1 port were configured as a trunk mode port, SWA could potentially receive frames from Host A even if Host A belonged to a different VLAN. However, since the port is in access mode, SWA will only forward frames for the VLAN assigned to that port and will not learn the MAC addresses of devices on other VLANs."
  },
  {
    "id": 123,
    "question": "As shown in the network below, all switches enable STP protocol. Disable SWA's GO/O/2 port configuration BPDU sending function, SWC GO/O/I re-converges to become the root port, about this process, which of the following statements are correct?",
    "options": {
      "A": "SWC sends TCN BPDU message to SWB",
      "B": "SWB forwards TCN BPDU to SWA",
      "C": "SWB sends configuration BPDU with TCA set to SWC",
      "D": "SWA sends configuration BPDU with TC set"
    },
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: \u2022 SWC sends TCN BPDU to SWB: When something changes in the network (like a link going down), SWC notices it and sends a special message (TCN BPDU) to SWB to tell it about the change. (Correct.) \u2022 SWB forwards TCN BPDU to SWA: SWB gets the TCN BPDU from SWC, and it passes it on to SWA (the main/root switch) to continue informing the network. (Correct) \u2022 SWB sends Configuration BPDU with TCA set to SWC: After SWB gets the TCN BPDU from SWC, it sends a confirmation (TCA set) back to SWC to say, \"I got your message.\" (Correct) \u2022 SWA sends Configuration BPDU with TC set: Once the root switch (SWA) knows about the change, it tells everyone else in the network by setting the TC flag in the BPDUs it sends out. (Correct)"
  },
  {
    "id": 124,
    "question": "In standard STP mode, which of the following non-root switches will forward the TC set BPDU generated by the root switch?",
    "options": {
      "A": "Designated port",
      "B": "Root port",
      "C": "Backup port",
      "D": "Preparation"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Explanation: Non-root switches receive it via their Root Port and forward it out their Designated Ports to inform downstream switches. SOURCE Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086964"
  },
  {
    "id": 125,
    "question": "The router's Radius information configuration is shown in the figure. Which of the following statements is correct?",
    "options": {
      "A": "The source IP address of the Radius packet sent by the router is 200.0.12.2",
      "B": "The IP address of the accounting server is 200.0.12.1",
      "C": "The IP address of the authorization server is 200.0.12.1",
      "D": "The IP address of the authentication server is 200.0.12.1"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100112357/142fad68/example\ufffeforconfiguring-the-primary-and-secondary-radius-servers Explanation: Options B and D are correct as they are both clearly configured in the image. B. The IP address of the accounting server is 200.0.12.1 \u25cf The command: radius-server accounting 200.0.12.1 1813 Clearly shows the accounting server IP is 200.0.12.1 (with port 1813). D. The IP address of the authentication server is 200.0.12.1 \u25cf The command: radius-server authentication 200.0.12.1 1812 Confirms the authentication server IP is also 200.0.12.1 (with port 1812)."
  },
  {
    "id": 126,
    "question": "If a Windows host is started for the first time, if the IP address is obtained by DHCP, then what is the source IP address of the first packet sent by this host?",
    "options": {
      "A": "127.0.0.1",
      "B": "169.254.2.33",
      "C": "0.0.0.0",
      "D": "255.255.255.255"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100276747/225eec10/dhcp\ufffemessages The DHCP initialization process works like this: A client sends a DHCPDISCOVER message with a source address of 0.0.0.0 and destination address of 255.255.255.255 (broadcast)."
  },
  {
    "id": 127,
    "question": "In order to implement the FIT AP online, the FIT AP first needs to obtain the IP address of the AC. Which of the following is not included in the method of obtaining the IP address of the AC by the FIT AP?",
    "options": {
      "A": "Broadcasting method",
      "B": "Static designation method on AP",
      "C": "Multicast mode",
      "D": "DHCP option mode"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100096325/78331d51/ap-online\ufffeprocess"
  },
  {
    "id": 128,
    "question": "How to add AP on AC?",
    "options": {
      "A": "Add online",
      "B": "Automatically discover AP",
      "C": "Import AP offline",
      "D": "Manually confirm APs in the uncertified list."
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100096325/1e602044/adding\ufffeaps"
  },
  {
    "id": 129,
    "question": "Which of the following messages is used by AP to request the software version from AC?",
    "options": {
      "A": "VRP System Request",
      "B": "Software Request",
      "C": "Image Data Request",
      "D": "Image package Request"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000060368/48c453a5/ap\ufffejoinprocess#sec?on5941142153214"
  },
  {
    "id": 130,
    "question": "The IEEE 802.11 ac standard only supports the 5 GHz frequency band.",
    "options": {
      "A": "TRUE",
      "B": "FALSE"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100081215"
  },
  {
    "id": 131,
    "question": "To query the configuration information of the device's OSPF protocol, which of the following commands can be used?",
    "options": {
      "A": "display ospf peer",
      "B": "Enter the command \"display this\" in the OSPF protocol view",
      "C": "display current-configuration",
      "D": "display ip routing-table"
    },
    "correct": [
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064353/32b784cf/display\ufffecurrentconfiguration Source: https://support.huawei.com/enterprise/en/doc/EDOC1100015130/b3431a1f/ospf- 2ospfnbrstatechange_ac?ve"
  },
  {
    "id": 132,
    "question": "Which of the following does not include in the VRP system login method?",
    "options": {
      "A": "Telnet",
      "B": "Netstream",
      "C": "SSH",
      "D": "web"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 133,
    "question": "In which view can the administrator modify the device name for the router?",
    "options": {
      "A": "User-view",
      "B": "Protocol-view",
      "C": "System-view",
      "D": "Interface-view"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100262557/bf7a8ec5/setting\ufffethe-device-name"
  },
  {
    "id": 134,
    "question": "If the transport layer protocol is UDP, the value of the network layer Protocol field is 6.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://en.wikipedia.org/wiki/List_of_IP_protocol_numbers Source: https://networklessons.com/cisco/ccna-routing-switching-icnd1-100-105/ipv4- packet-header"
  },
  {
    "id": 135,
    "question": "If the application layer protocol is Telnet, what is the value of the Protocol field in the IPv4 header?",
    "options": {
      "A": "23",
      "B": "17",
      "C": "6",
      "D": "67"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://networklessons.com/cisco/ccna-routing-switching-icnd1-100-105/ipv4- packet-header"
  },
  {
    "id": 136,
    "question": "In the network shown in the figure below, host A is not configured with a gateway, and host B has the ARP cache of the gateway. use the command ping 11.0.12.1 on host A. Which of the following statements are correct?",
    "options": {
      "A": "No data packets will be sent from host A",
      "B": "The IP address of the data packet sent by host A is 11.0.12.1",
      "C": "The destination MAC address of the data frame sent by host A is MAC-C",
      "D": "The destination MAC address of the data frame sent by host A is MAC-B"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Host A doesn\u2019t know where to send packets (no gateway + IP outside its local network), so it won\u2019t send anything."
  },
  {
    "id": 137,
    "question": "Which layer of the OSI reference model does the router work at?",
    "options": {
      "A": "Data link layer",
      "B": "Transport layer",
      "C": "Application layer",
      "D": "Network layer"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 138,
    "question": "VRP operating platform, which of the following commands can only view static routes?",
    "options": {
      "A": "display ip routing-table statistics",
      "B": "display ip routing-table verbose",
      "C": "display ip routing-table",
      "D": "display ip routing-table protocol static"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100333923/a884a514/display\ufffeip-routing-table-protocol"
  },
  {
    "id": 139,
    "question": "Which OSPF version below is suitable for IPv6?",
    "options": {
      "A": "OSPFv1",
      "B": "OSPFv2",
      "C": "OSPFv3",
      "D": "OSPFv4"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100082074"
  },
  {
    "id": 140,
    "question": "ip route-static 10.0.2.2 255.255.255.255 10.0.12.2 preference 20. Which is correct about this command?",
    "options": {
      "A": "The NextHop of this route is 10.0.12.2",
      "B": "The priority of this route is 20",
      "C": "This route can guide the forwarding of packets with the destination IP address 10.0.2.2.",
      "D": "This route can guide the forwarding of packets with the destination IP address 10.0.12.2"
    },
    "correct": [
      "A",
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: A. The NextHop is 10.0.12.2 \u2192 Correct (clearly specified in the command). B. The priority (preference) is 20 \u2192 Correct (given after preference keyword). C. The route matches destination 10.0.2.2/32 \u2192 Correct (only packets to 10.0.2.2). D. Wrong \u2192 10.0.12.2 is NextHop, not the destination."
  },
  {
    "id": 141,
    "question": "What are the following characteristics of the default VLAN in the Layer 2 Ethernet switch?",
    "options": {
      "A": "The default VLAN cannot be deleted manually",
      "B": "By default, all ports of the switch are member ports of the default VLAN",
      "C": "A default VLAN must be created before it can be assigned a port",
      "D": "The IP address configured on the switch will only be applied to the member ports of the default VLAN"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178168/6907bedb/default\ufffevlan Option B is correct Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178168/6907bedb/default\ufffevlan Option A is correct, and Option C is incorrect Source: https://support.huawei.com/enterprise/en/doc/EDOC1100278261/55c108dd/crea?ng\ufffeand-dele?ng-avlan"
  },
  {
    "id": 142,
    "question": "Switch stacking supports more than two devices. Through stacking, multiple switches can be grouped into one logical device.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100102781"
  },
  {
    "id": 143,
    "question": "On which layer of the OSI reference model does the Ethernet switch work?",
    "options": {
      "A": "Network layer",
      "B": "Data link layer",
      "C": "Physical layer",
      "D": "Transport layer"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 144,
    "question": "The bridge ID of the STP protocol in the switching network is as follows. Which of the following bridge ID switches will become the root bridge?",
    "options": {
      "A": "A.4096 00-01-02-03-04-DD",
      "B": "B.32768 00-01-02-03-04-AA",
      "C": "32768 00-01-02-03-04-cc",
      "D": "D.32768 00-01-02-03-04-BB"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 145,
    "question": "Refer to the route-in-a-stick configuration in the figure below, it can be judged that the administrative department and the financial department can communicate with each other even if the ARP proxy is not enabled on the RI sub-interface.",
    "options": {
      "A": "TRUE",
      "B": "FALSE"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei eNSP"
  },
  {
    "id": 146,
    "question": "Link aggregation is a common technology in enterprise networks. Which of the following descriptions are the advantages of link aggregation technology?",
    "options": {
      "A": "Improve safety",
      "B": "Realize load sharing",
      "C": "Increase bandwidth",
      "D": "Improve reliability"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification"
  },
  {
    "id": 147,
    "question": "The network administrator configures the Huawei router RTA as shown in the figure. If a user needs to be authenticated in the authentication domain \"huawei\", the correct description below is (). [RTA]aaa [RTA-aaa]domain Huawei [RTA-aaa-domain-huawei]authentication-scheme aul [RTA-aaa-domain-huawei]authentication-scheme au2",
    "options": {
      "A": "\"authentication-scheme aul\" authentication will be used, if \"au1\" is deleted, \"au2\" authentication will be used",
      "B": "Will use \"au2\" authentication and will use \"authentication-scheme au1\" authentication",
      "C": "Will use \"authentication-scheme au2\" authentication",
      "D": "\"authentication-scheme au2\" authentication will be used, if \"au2\" is registered, \"aul\" authentication will be used"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Explanation: The configuration [RTA-aaa-domain-huawei]authentication-scheme au2 explicitly configures the authentication scheme named \"au2\" within the domain \"Huawei.\" This means that any authentication requests within the \"Huawei\" domain will use the \"au2\" authentication scheme. The configuration does not mention \"au1\" or imply any conditional use based on deletion or registration of authentication schemes. Therefore, option C accurately describes the configuration provided in the Huawei router."
  },
  {
    "id": 148,
    "question": "In the network shown in the figure, which of the following configurations can realize that host A can access the Internet, but host B cannot? (Multiple Choice)",
    "options": {
      "A": "acl number 2000 rule 5 deny source 100.0.12.0 0.0.0.255 rule 10 permit source 100.0.13.0 0.0.0.255 interface GigabitEthernet0/0/3 traffic-filter outbound ac1 2000",
      "B": "acl number 2000 rule 5 deny source 100.0.12.0 0.0.0.255 rule 10 permit interface GigabitEthernet0/0/3 traffic-filter outbound ac1 2000",
      "C": "acl number 2000 rule 5 permit source 100.0.12.0 0.0.0.255 rule 10 deny source 100.0.13.0 0.0.0.255 interface GigabitEthernet0/0/3 traffic-filter outbound act 2000",
      "D": "acl number 2000 rule 5 permit source 100.0.12.0 0.0.0.255 rule 10 deny interface GigabitEthernet0/0/3 traffic-filter outbound act 2000"
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification"
  },
  {
    "id": 149,
    "question": "As shown in tie figure, RTA uses NAT technology and realizes multiple-to-multiple NAPT address translation by defining an address pool, so that hosts in the private network can access the public network Suppose that there are only two public IP addresses in the address pool, and they have been assigned to hosts A and B for address conversion, and if host C also wants to access the public network, which of the following description is correct?",
    "options": {
      "A": "Host C cannot be assigned a public network address and cannot access the public network",
      "B": "All hosts can access the public network by using the public network address turn",
      "C": "RTA converts the source port of host C, and host C can access the public network",
      "D": "RTA assigns the interface address (200.10.10.3) to host C, host C can access the pubic network"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Explanation: Limited Public IP Addresses: The scenario describes a situation where there are only two public IP addresses available (assigned to Host A and B) but multiple devices (including Host C) need access to the public network. NAT allows routers to translate private IP addresses on a private network to public IP addresses for internet access. NAPT (Network Address Port Translation): The fact that the router uses NAPT indicates it translates not only the IP addresses but also the port numbers. This allows multiple devices behind the router to share the same public IP address. Port Translation: When Host C initiates a connection to the internet, the RTA (Router) translates the private IP address and source port of Host C to the public IP address (shared by other devices) and a unique, unused port number. This allows the communication to be routed to the internet and responses back to be directed to Host C based on the translated port number. Incorrect Options: A. While there are only two public IP addresses, NAPT allows sharing a single public IP with multiple devices using port translation. B. NAPT doesn't require taking turns. Each device can access the internet simultaneously using unique port numbers. D. The interface address (200.10.10.3) is likely the IP address of the router itself, not something that can be directly assigned to Host C."
  },
  {
    "id": 150,
    "question": "The correct description of the information as shown in the figure is (). [Rl] display interface G0/0/0 current state: Administratively DOWN Line protocol current state: DOWN",
    "options": {
      "A": "The GigabitEthernet 0/0/0 interface was manually closed by the administrator",
      "B": "GigabitEthernet 0/010 interface does not enable dynamic routing protocol",
      "C": "The GigabitEthernet 0/0/0 interface is not configured with an IP address",
      "D": "GigabitEthemet 0/0/0 interface is connected to a wrong cable"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 151,
    "question": "As shown in the figure below, all switches enable the STP protocol and keep other configurations in their default state. When the network is stable, which of the following statements are correct? (Multiple choice)",
    "options": {
      "A": "Both ports of SWB are in the forwarding state",
      "B": "SWB is the root bridge in this network",
      "C": "SWA is the root bridge in this network",
      "D": "Both ports of SWC are in the forwarding state"
    },
    "correct": [
      "A",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: Since SWB has both a root port and a designated port, it must be in the forwarding state. While one port of SWC is in block state, option D is incorrect, while option A is correct Source: Huawei Lecture # 9, Page # 13"
  },
  {
    "id": 152,
    "question": "What is the total length of the IPv6 address in bits?",
    "options": {
      "A": "96",
      "B": "64",
      "C": "32",
      "D": "128"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 153,
    "question": "The IPv4 address assigned by the network administrator to a host in the network is 192.168.1.1/28. How many hosts can be added to the network where this host is located?",
    "options": {
      "A": "12",
      "B": "15",
      "C": "13",
      "D": "14"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Explanation: Formula to calculate the number of usable IP addresses in a subnet is 2 \ud835\udc5b\ud835\udc62\ud835\udc5a\ud835\udc4f\ud835\udc52\ud835\udc5f \ud835\udc5c\ud835\udc53 \u210e\ud835\udc5c\ud835\udc60\ud835\udc61 \ud835\udc4f\ud835\udc56\ud835\udc61\ud835\udc60 \u2212 2. For a /28 subnet: Number of host bits = 32 \u2212 28 = 4 \ud835\udc4f\ud835\udc56\ud835\udc61\ud835\udc60 So, the number of usable IP addresses = 2 4 \u2212 2 = 16 \u2212 2 = 14 Since one host has already been assigned, 13 more hosts can be added to this network."
  },
  {
    "id": 154,
    "question": "All ports on the root bridge switch are designated ports.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000017271/bd821590/stp-rstp\ufffeoverview"
  },
  {
    "id": 155,
    "question": "As shown in the figure below, host A and host B cannot communicate.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei eNSP"
  },
  {
    "id": 156,
    "question": "Which of the following statements about IPv6 multicast addresses are correct?",
    "options": {
      "A": "Provide redundant functions for services",
      "B": "Realize load sharing of services",
      "C": "The packet whose destination address is a multicast address will be sent to the nearest network interface in the sense of routing",
      "D": "Multicast addresses and unicast addresses use the same address space"
    },
    "correct": [
      "A",
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100365387/2db43c79/mul?cast-ipv6- loadspliBng Source: https://support.huawei.com/enterprise/en/doc/EDOC1100278983/84632e62/understanding\ufffeipv6"
  },
  {
    "id": 157,
    "question": "What is the number range of advanced ACL?",
    "options": {
      "A": "3000-3999",
      "B": "2000-2999",
      "C": "4000-4999",
      "D": "6000-6031"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 6, Page # 10"
  },
  {
    "id": 158,
    "question": "The basic header length of IPv6 packets is a fixed value.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 19, Page # 35"
  },
  {
    "id": 159,
    "question": "In which of the following network types does the OSPF protocol need to elect DR and BDR?",
    "options": {
      "A": "Point to multipoint",
      "B": "NBMA",
      "C": "Point-to-point type",
      "D": "Broadcast type"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 6, Page # 34"
  },
  {
    "id": 160,
    "question": "By default, how long is the lease period of the IP address assigned by the DHCP server?",
    "options": {
      "A": "12h",
      "B": "1h",
      "C": "24h",
      "D": "18h"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 15, Page # 27"
  },
  {
    "id": 161,
    "question": "When deploying ACL on Huawei devices, which of the following descriptions is correct?",
    "options": {
      "A": "ACL can match the TCP/UDP port number of the message, and can specify the range of port numbers",
      "B": "The same ACL can be called under multiple interfaces",
      "C": "When ACL defines rules, it can only proceed in the order of IO, 20, and 30",
      "D": "ACL cannot be used to filter OSPF traffic, because OSPF traffic does not use UDP protocol encapsulation",
      "E": "When calling ACL under the interface, it can only be applied to the outbound direction"
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086647 Source: https://community.cisco.com/t5/networking-knowledge-base/cisco-access-control\ufffelists acl/tap/4182349"
  },
  {
    "id": 162,
    "question": "In the network shown in the figure below, when the OSPF neighbor status is stable, what is the neighbor status of Router B and Router C?",
    "options": {
      "A": "Attempt",
      "B": "2-way",
      "C": "Full",
      "D": "Down"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13685- 13.html"
  },
  {
    "id": 163,
    "question": "Which parameter is used in the spanning tree protocol for root bridge election?",
    "options": {
      "A": "Port ID",
      "B": "Bridge priority",
      "C": "Root path cost",
      "D": "Bridge ID"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086964"
  },
  {
    "id": 164,
    "question": "MIB (Management Information Base) is a virtual database that exists only in NMS.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100111019/7f52c07b/snmp\ufffebased-networkmanagement"
  },
  {
    "id": 165,
    "question": "Now it is necessary to implement a Python automation script Telnet to the device to view the device running configuration. Which of the following statements is wrong?",
    "options": {
      "A": "Telnetlib can achieve this function.",
      "B": "Use telnet.Telnet (host) to connect to the Telnet server.",
      "C": "can use telnet.write(b\"display current-configuration \\n\") to input the command to view the current configuration of the device.",
      "D": "telnet.close () is used after a command is entered everytime; the function is that the user waits for the switch to return information."
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://docs.python.org/3/library/telnetlib.html#telnetlib.Telnet.close"
  },
  {
    "id": 166,
    "question": "The network administrator of a certain company wants to uniformly divide the users who often access the company network from different switches into VLAN 10 when they frequently change office locations. Which of the following methods should be used to divide VLANs?",
    "options": {
      "A": "Divide VLAN based on protocol",
      "B": "Divide VLAN based on MAC address",
      "C": "Divide VLAN based on the port",
      "D": "Divide VLAN based on the subnet"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000017271/a6bce928/dividing-a-lan\ufffeinto-vlansbased-on-ip-subnets"
  },
  {
    "id": 167,
    "question": "The picture shows the display startup information of the AR2200 router. Regarding this information, which of the following statements is wrong?",
    "options": {
      "A": "next system startup file system can use the command \"startup system software<startup\ufffesoftware-name>\" to modify",
      "B": "The running configuration file is not saved",
      "C": "The system file used by the device this time is ar2220-v200r003c00spc00.cc",
      "D": "The system file cannot be modified when the device is started next time"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Explanation: A. next system startup file system can use the command \"startup system software <startup- softwarename>\" to modify - This statement is confirmed by the text on the display. B. The running configuration file is not saved - The text says \"Startup saved\ufffeconfiguration file: null\" and \"Next startup saved-configuration file: null null\" which indicates the configuration file is not saved. C. The system file used by the device this time is ar2220-v200r003c00spc200.cc - The text says \"Startup system software: sdl:/ar2220-200r003c00spc200.cc\"."
  },
  {
    "id": 168,
    "question": "The administrator plans to implement route backup by configuring static floating routes. What is the correct way to achieve this?",
    "options": {
      "A": "The administrator needs to configure different metric values for the main static route and the standby static route",
      "B": "The administrator needs to configure different TAGs for the main static route and the standby static route",
      "C": "The administrator only needs to configure two static routes",
      "D": "The administrator needs to configure different protocol priority values for the main static route and the standby static route"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100278527/488a24b0/understanding\ufffesta?croutes"
  },
  {
    "id": 169,
    "question": "There are hosts in a private network that need to access the Internet. In order to achieve this requirement, which of the following configurations should the administrator do on the edge router of the network?",
    "options": {
      "A": "Default route",
      "B": "STP",
      "C": "DHCP",
      "D": "NAT"
    },
    "correct": [
      "A",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100034071/e96c0933/example-for\ufffeconfiguringnat"
  },
  {
    "id": 170,
    "question": "Which of the following descriptions about the Trunk port and Access port is correct?",
    "options": {
      "A": "Trunk port can only send untagged frames",
      "B": "Access port can only send untagged frames",
      "C": "Access port can only send tagged frames",
      "D": "Trunk port can only send tagged frames"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100096323/819ade70/understanding\ufffevlans"
  },
  {
    "id": 171,
    "question": "Which of the following statements about the division of the OSPF protocol area is wrong?",
    "options": {
      "A": "Area 0 is the backbone area, and other areas must be connected to this area",
      "B": "The LSDBs in the routers in the same OSPF area are completely consistent",
      "C": "Dividing OSPF areas can reduce the LSDB scale of some routers",
      "D": "Only ABR can be used as ASBR"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100082074#EN\ufffeUS_TOPIC_0169203192"
  },
  {
    "id": 172,
    "question": "NFV (Network Function Virtualization), network function virtualization realizes the deployment of network applications in a software-based way.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://info.support.huawei.com/info-finder/encyclopedia/en/NFV.html"
  },
  {
    "id": 173,
    "question": "UDP cannot guarantee the reliability of data transmission, and does not provide functions such as message sequencing and flow control. It is suitable for flows with low transmission reliability requirements but high transmission speed and delay requirements.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 174,
    "question": "The administrator cannot log in to the Huawei router through Telnet, but other administrators can log in normally, so which of the following are the possible reasons?",
    "options": {
      "A": "The authority level of the administrator user account has been modified to O",
      "B": "The administrator user account has been disabled",
      "C": "The Telnet service of the AR2200 router has been disabled",
      "D": "The administrator user account has been deleted"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100192869/9daeadbe/users\ufffeother-than-thesystem-administrator-fail-to-log-in-to-the-o-m-plane"
  },
  {
    "id": 175,
    "question": "VRP operating system commands are divided into 4 levels: access level, Monitoring level, Configuration level, and Management level. Which level can run various business configuration commands, but cannot operate the file system?",
    "options": {
      "A": "Configuration level",
      "B": "Monitoring level",
      "C": "Access level",
      "D": "Management level"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 176,
    "question": "Using a traditional landline to make calls is a way of network communication.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 177,
    "question": "In the VRP interface, use the command delete vrpcfg.zip to delete a file, which must be emptied in the recycle bin to completely delete the file.",
    "options": {
      "A": "True",
      "B": "FaIse"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/knowledge/EKB1000114024"
  },
  {
    "id": 178,
    "question": "In what state does the OSPF protocol determine the master-slave relationship of DD packets?",
    "options": {
      "A": "ExStart",
      "B": "Full",
      "C": "2-way",
      "D": "Exchange"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100278569/c1083833/understanding\ufffeospf"
  },
  {
    "id": 179,
    "question": "The following two configuration commands can realize the router RTA to the same destination 10.1.1.0 routing master and backup. \u3010RTA\u3011 ip route-static 10.1.1.0 24 12.1.1.1 permanent \u3010RTA\u3011 ip route-static 10.2.2.0 24 13.1.1.1.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1: Since the destination on networks are different (10.1.1.0/24 and 10.2.2.0/24), these commands do not achieve the intended goal of routing to the same destination on with a master and backup route. Justification#2: Source: https://forum.huawei.com/enterprise/intl/en/thread/STQTIC\ufffeROUTE/667280744621424641?blogId=667280744621424641 The permanent keyword is used in the first command, which means that the route with the next-hop 12.1.1.1 is set to be permanent, and it will not be removed even if the associated interface goes down."
  },
  {
    "id": 180,
    "question": "In the network shown in the figure below, the bridge ID of the switch has been marked. Enter the command stp root secondary on the SWD switch, and which of the following switch will become the root bridge of this network?",
    "options": {
      "A": "SWC",
      "B": "SWA",
      "C": "SWB",
      "D": "SWD"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide: 09 STP Principle and Configuration on page Number: 24 SWA has the smallest bridge ID (4096 is lower than 28672), so SWA will remain the root bridge even after applying the stp root secondary command on SWD. The switch with the smallest bridge ID becomes the root bridge."
  },
  {
    "id": 181,
    "question": "If the Length/Type of an Ethernet data frame = 0x8100, which of the following statements is correct?",
    "options": {
      "A": "There must be an IP header in the upper layer of this data frame",
      "B": "This data frame must carry a VLAN TAG",
      "C": "There must be a UDP header in the upper layer of this data frame",
      "D": "There must be a TCP header in the upper layer of this data frame"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide: 08 VLAN Principle and Configuration on page Number: 10"
  },
  {
    "id": 182,
    "question": "FAT AP can independently complete wireless user access, wireless user authentication, and business data forwarding without AC.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000060368/9e00e376/understanding\ufffemodes-supported-by-aps"
  },
  {
    "id": 183,
    "question": "There is no channel overlap in the 14 available frame segments in the 185.2.4 GHz frame segment.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide: 16 WLAN Overview Page Number: 21"
  },
  {
    "id": 184,
    "question": "In the WLAN network architecture, what is terminal equipment that supports the 802.11 standard called?",
    "options": {
      "A": "Client",
      "B": "AC",
      "C": "STA",
      "D": "AP"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100112363/b1db415/80211- standards"
  },
  {
    "id": 185,
    "question": "Which of the following characteristics does the OSPF protocol have? (Multiple Choice)",
    "options": {
      "A": "Easy to produce routing loops",
      "B": "Calculate the shortest path by number",
      "C": "Support the division of areas",
      "D": "Trigger an update"
    },
    "correct": [
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://www.geeksforgeeks.org/open-shortest-path-first-ospf-protocol-fundamentals/ Option C: Support the division of areas \u2022 To handle routing efficiently and on time, this protocol divides an autonomous system into areas. \u2022 Area is a collection of routers, hosts, networks all contained within an autonomous system. \u2022 The network is divided and it can be structured, or subdivided, into routing areas to simplify administration and optimize traffic and resource utilization. \u2022 Among the areas, there is an area called \u2018backbone\u2019 to which all the other areas are connected and serve as the primary area. \u2022 Two different areas can\u2019t be connected directly but they need to be connected through the backbone network and it is compulsory. Option D: Trigger an update \u2022 Also when there is a slight change in the router configuration (routers added/removed), the routing table is updated very fast. \u2022 If one of the links fails the protocol finds the other shortest path to reach the destination hence it possesses faster convergence."
  },
  {
    "id": 186,
    "question": "Which of the following statement about static routing is wrong?",
    "options": {
      "A": "Cannot automatically adapt to changes in network topology",
      "B": "Manual configuration by the network administrator",
      "C": "Low system performance requirements",
      "D": "Routers need to exchange routing information"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide: 05 IP Routing Basics page Number: 28 The disadvantage of static routes is that they cannot automatically adapt to network topology changes and so require manual intervention."
  },
  {
    "id": 187,
    "question": "In the network shown in the figure below, which of the following commands can be entered on the router to enable host A to ping host B? (Multiple choice)",
    "options": {
      "A": "RTA: ip route-static 10.0.12.5 255.255.255.252 11.0.12.2 RTB: ip route-static 10.0.12.1 255.255.255.252 11.0.12.1",
      "B": "RTA: ip route-static 10.0.12.5 255.255.255.252 11.0.12.1 RTB: ip route-static 10.0.12.1 255.255.255.252 11.0.12.2",
      "C": "RTA: ip route-static 0.0.0.0 0.0.0.0 11.0.12.2 RTB: ip route-static 0.0.0.0 0.0.0.0 11.0.12.1",
      "D": "RTA: ip route-static 0.0.0.0 0.0.0.0 11.0.12.1 RTB: ip route-static 0.0.0.0 0.0.0.0 11.0.12.2"
    },
    "correct": [
      "A",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Slide: 03 Network Layer Protocols and IP Addressing Page Number: 2"
  },
  {
    "id": 188,
    "question": "Which of the following IPv4 addresses can be used by a host to directly access the Internet?",
    "options": {
      "A": "192.168.1.1/24",
      "B": "172.32.1.1/24",
      "C": "172.16.255.254/24",
      "D": "10.255.255.254/24"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide: 03 Network Layer Protocols and IP Addressing Page Number: 22"
  },
  {
    "id": 189,
    "question": "The switch becomes a logical switch after stacking and clustering, and Eth- Trunk across physical devices can be deployed to improve network reliability.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000069520/5e798e3e/typi cal\ufffestack-configura on-of-fixedswitches Fixed switches are often deployed at the aggregation layer and access layer. Unlike modular switches, fixed switches are continuous; the number of ports provided by a single fixed switch may be insufficient to meet the network requirement one logical switch. You can set up a stack to improve network scalability and device reliability."
  },
  {
    "id": 190,
    "question": "What is the value of TPID defined by IEEE802.1Q",
    "options": {
      "A": "0x8200",
      "B": "0x7200",
      "C": "0x8100",
      "D": "0x9100"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100277028/3e01a4f2/tpid TPID : The Tag Protocol Identifier (TPID) specifies the protocol type of a VLAN tag. The TPID value defined in IEEE 802.1Q is 0x8100."
  },
  {
    "id": 191,
    "question": "As shown in the figure below, assuming the other configurations of the switch are kept in the default state, which port of the following switch will become the designated port?",
    "options": {
      "A": "SWC's G0/0/1",
      "B": "SWA's G0/0/3",
      "C": "SWC's G0/0/2",
      "D": "SWB's G0/0/1"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Slide: 09 STP Principles and Configurations on Page Number: 22 In this scenario, SWA has the lowest bridge ID therefore it is the root bridge making all its ports designated by default including port G0/0/3. For non-root bridges like SWB and SWC, we compare the path costs to the root bridge. SWB's port G0/0/1 is designated since it has a direct link to the root bridge, offering the lowest path cost. Thus, the correct designated ports are B. SWA's G0/0/3 and D. SWB's G0/0/1."
  },
  {
    "id": 192,
    "question": "The management of users by NAS devices is based on domains. Each user belongs to a domain, and a domain is a group of users who belong to the same domain.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100112357/1e2a4c59/do main\ufffebased-user-management Domain-based User Management: An NAS performs domain-based user management. A domain is a group of users, and each user belongs to a domain. A user uses only AAA configuration information in the domain to which the user belongs"
  },
  {
    "id": 193,
    "question": "Which of the following fields does the MPLS header include? (Multiple Choice)",
    "options": {
      "A": "EXP",
      "B": "TTL",
      "C": "Label",
      "D": "Tos"
    },
    "correct": [
      "A",
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100334522/e1707d39/understanding-mpls"
  },
  {
    "id": 194,
    "question": "Huawei ARG3 series routers have all SNMP versions (SNMPv1, SNMPv2c and SNMPv3) by default.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000069520/dfaf8717/typic al-snmp-configuration"
  },
  {
    "id": 195,
    "question": "IPv6 address 2001: ABEF: 2240E: FFE2: BCC0: CD0:DDBE:8D58 cannot be abbreviated.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide: 19 IPv6 Basics Page Number: 14"
  },
  {
    "id": 196,
    "question": "Which state does the OSPF protocol use to indicate that the adjacency relationship has been established?",
    "options": {
      "A": "Full",
      "B": "2-way",
      "C": "Attempt",
      "D": "Down"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://www.ciscopress.com/ar cles/ar cle.asp?p=2294214#:~:text=State%3A%2 0A%20Full%20state%20represents,with%20the%20router%20ID%201.1. State: A Full state represents the final stage of OSPF neighbor establishment process and denotes that the local router has established full neighbor adjacency with the remote OSPF neighbor. DR means that DR/BDR election process has been completed and that the remote router with the router ID 1.1.1.1 has been elected as the designated router (DR)."
  },
  {
    "id": 197,
    "question": "The TRACERT diagnostic tool in Huawei routers is used to track the data forwarding path.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.microso .com/en-gb/topic/how-to-use-tracert-to-troubleshoo cp-ip\ufffeproblems-inwindows-e643d72b-2f4f-cdd6-09a0-fd2989c7ca8e This article describes TRACERT (Trace Route), a command-line utility that you can use to trace the path that an Internet Protocol (IP) packet takes to its destination."
  },
  {
    "id": 198,
    "question": "The routing table output information of a router is shown in the figure. Which of the following statements is correct? (Multiple choice)",
    "options": {
      "A": "The local router to the NextHop of 10.0.2.2 is 10.0.21.2",
      "B": "The local router to the NextHop of 10.0.2.1 is 10.0.21.2",
      "C": "The local router to the NextHop of 10.0.2.2 is 10.0.12.2",
      "D": "The local router to the NextHop of 10.0.0.1 is 10.0.12.2"
    },
    "correct": [
      "A",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: For the destination 10.0.2.2/32, the next hop is 10.0.21.2. For the destination 10.0.0.0/8, the next hop is 10.0.12.2"
  },
  {
    "id": 199,
    "question": "Which of the following OSPF protocol packets can ensure the reliability of LSA updates?",
    "options": {
      "A": "LSACK",
      "B": "DD",
      "C": "LSU",
      "D": "LSR"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://forum.huawei.com/enterprise/en/OSPF/thread/667267213926744064- 667213852955258880"
  },
  {
    "id": 200,
    "question": "The last option field of IPv4 is variable-length optional information. What is the maximum length of this field?",
    "options": {
      "A": "10B",
      "B": "40B",
      "C": "60B",
      "D": "20B"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://forum.huawei.com/enterprise/en/use-of-the-op%C6%9Fons-field\ufffeipv4header/thread/667267215742877696-667213852955258880 The IP datagram can contain zero, one or more options, which makes the total length of the Options field in the IPv4 header variable. Each of the options can be a single byte or several bytes long, depending on the amount of information the option needs to forward (from 0 to 40 bytes maximum). When more than one option is included, they are simply concatenated and placed in the Options field as a whole. All datagrams may not contain this field. This field is optional."
  },
  {
    "id": 201,
    "question": "Which of the following advantages does router-on-a-stick achieve inter-VLAN routing intercommunication?",
    "options": {
      "A": "Reduce the number of equipment",
      "B": "Reduce the use of IP addresses",
      "C": "Reduce the number of link connections",
      "D": "Reduce routing table entries"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://community.cisco.com/t5/networking-knowledge-base/pros-and-cons-of-router-on-a\ufffestickmethodinnetworking/tap/4951799#:~:text=Advantages%20of%20Router%20on%20a%20St ick%3A&text=Simplified%20Network%20Management%3A%20RoAS%20simplifies,routing% 20protocols%20and%20security%20policie s."
  },
  {
    "id": 202,
    "question": "If STP is not turned on for a network composed of switches, there must be a Layer 2 loop.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide 09 STP Principle and Configuration"
  },
  {
    "id": 203,
    "question": "The switch receives a unicast data frame. If the destination MAC of the data frame can be found in the MAC table, the data frame will be forwarded from the corresponding MAC port.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide#07, Page Number: 23"
  },
  {
    "id": 204,
    "question": "The output information of the link aggregation port of a certain switch is as follows. If you want to delete Eth-Trunk 1, which of the following commands is correct?",
    "options": {
      "A": "undo interface Eth-trunk 1",
      "B": "inte GigabitEthernet 0./0/2 Undo eth-trunk Quit Undo interface eth-trunk 1",
      "C": "inte GigabitEthernet 0./0/1 Undo eth-trunk Quit inte GigabitEthernet 0./0/2 Undo eth-trunk Quit",
      "D": "inte GigabitEthernet 0./0/1 Undo eth-trunk Quit Undo interface eth-trunk 1"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000057410?section=j01o&topicName=del eti ng-an-eth-trunk"
  },
  {
    "id": 205,
    "question": "Which information of the data frame does the VLANIF interface use to determine whether to perform Layer 2 or Layer 3 forwarding?",
    "options": {
      "A": "Destination MAC",
      "B": "Source MAC",
      "C": "Destination port",
      "D": "Source IP"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://forum.huawei.com/enterprise/en/tc-while/thread/667234961951965185- 667213879488425984 The switch determines whether to perform Layer 2 or Layer 3 forwarding based on the destination MAC address of the received unicast frame. When the destination MAC address of the received packet is the MAC address of the VLANIF interface, the packet is forwarded at Layer 3. Otherwise, Layer 2 forwarding is used"
  },
  {
    "id": 206,
    "question": "If the value of the Type/Length field of an Ethernet data frame is 0x0800, the length of the upper layer message header carried by this data frame is in the range of 20-60B.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide#07, Page Number: 10"
  },
  {
    "id": 207,
    "question": "When using FTP for file transfer, how many TCP connections will be established?",
    "options": {
      "A": "2",
      "B": "1",
      "C": "3",
      "D": "4"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://www.sciencedirect.com/topics/computer-science/file-transfer-protocol The File Transfer Protocol (FTP) sets up two connections: one for the commands, the other for the data exchange"
  },
  {
    "id": 208,
    "question": "What are the user authentication methods that can be deployed in WLAN? (Multiple choice)",
    "options": {
      "A": "Portal authentication",
      "B": "MAC authentication",
      "C": "Radius certification",
      "D": "802.1X authentication"
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178178/60b102f2/configuring-a\ufffeuserauthen%C6%9Fca%C6%9Fon-mode"
  },
  {
    "id": 209,
    "question": "Which of the following IEEE 802.11 standards support operation in the 5GHz frequency band?",
    "options": {
      "A": "802.11b",
      "B": "802.11g",
      "C": "802.11n",
      "D": "802.11a"
    },
    "correct": [
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Slide#16, Page number 7"
  },
  {
    "id": 210,
    "question": "In order to join the wireless network, STA needs to obtain wireless network information first. Which of the following messages is used by the STA to actively obtain the SSID information?",
    "options": {
      "A": "Probe",
      "B": "Join",
      "C": "Discovery",
      "D": "Beacon"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100112363/75acc8a8/sta\ufffeaccess"
  },
  {
    "id": 211,
    "question": "Broadly speaking, which of the following does the transmission medium that constitutes the wireless local area network WLAN not include?",
    "options": {
      "A": "Ray",
      "B": "Radio waves",
      "C": "Infrared",
      "D": "Laser"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100320943/957921b6"
  },
  {
    "id": 212,
    "question": "Which field of the IPv6 packet header can be used for QoS (Quality of Service)?",
    "options": {
      "A": "Traffic Class",
      "B": "Payload Length",
      "C": "Version",
      "D": "Next Header"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://www.microsoftpressstore.com/articles/article.aspx?p=2225063&seqNum=3#:~:text=Traff ic%20Class%20The%20Traffic%20Class,this%20field%20is%208%20bits."
  },
  {
    "id": 213,
    "question": "Connection between switches and hosts, which port link type is often used by the switch?",
    "options": {
      "A": "Access link",
      "B": "Trunk link",
      "C": "Trunk link",
      "D": "Hybrid link"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178168/8ebf93dc/link-and\ufffeinterfacetypes https://jumpcloud.com/it-index/what-is-an-access-port"
  },
  {
    "id": 214,
    "question": "When using the FTP protocol to upgrade the router software, which of the following transmission mode should be selected?",
    "options": {
      "A": "Binary mode",
      "B": "Byte mode",
      "C": "Text mode",
      "D": "Stream byte mode"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide#15, Page Number 6"
  },
  {
    "id": 215,
    "question": "In the network shown below, Host A does not configure the gateway; Host B exists a gateway ARP cache. Which of the following statements is correct?",
    "options": {
      "A": "Enable ARP proxy on the GO/0/1 port of the router, then host A can communicate with host B",
      "B": "Host A and Host B cannot communicate in both directions",
      "C": "The data packet sent by host B with the destination IP address of 10.0.12.1 can be forwarded to host A",
      "D": "The data packet sent by host A with the destination IP address of 11.0.12.1 can be forwarded to host B"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100279002/64996475/vlanconfiguration"
  },
  {
    "id": 216,
    "question": "The network structure and OSPF partition are shown in the following figure; in addition to RTA, routers RTB, RTC, and RTD are ABR routers.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100034072/32a400ec/ospf\ufffefundamentals"
  },
  {
    "id": 217,
    "question": "The network administrator hopes to effectively use the IP address of the 192.168.176.0/25 network segment. Now that the company\u2019s marketing department has 20 hosts, which of the following is the best address segments allocated to the marketing department?",
    "options": {
      "A": "192.168.176.160/27",
      "B": "192.168.176.0/25",
      "C": "192.168.176.96/27",
      "D": "192.168.176.48/29"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification The correct subnet that fits the requirement of at least 20 hosts within the 192.168.176.0/25 network is Option C: 192.168.176.96/27. This subnet provides 30 usable IP addresses, which is more than enough for the 20 hosts in the marketing department."
  },
  {
    "id": 218,
    "question": "What is the main function of the dynamic routing protocol?",
    "options": {
      "A": "Manage routers",
      "B": "Generate IP address",
      "C": "Dynamically generate routing entries",
      "D": "Control router interface status"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide#06, Page Number 18"
  },
  {
    "id": 219,
    "question": "The device port running STP protocol is in the forwarding state. Which of the following statements is correct?",
    "options": {
      "A": "The port not only forwards user traffic but also processes BPDU packets.",
      "B": "The port only receives and processes BPDUs and does not forward user traffic.",
      "C": "The port will build a MAC address table based on the received user traffic, but it does not forward user traffic.",
      "D": "The port not only does not process BPDU packets, but also does not forward user traffic."
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide#09, page 33"
  },
  {
    "id": 220,
    "question": "Which of the following descriptions about spanning tree designated ports is correct?",
    "options": {
      "A": "The designated port can forward configuration BPDU messages to the network segment connected to it.",
      "B": "The port on the root switch must not be a designated port.",
      "C": "Each switch has only one designated port.",
      "D": "The port on the root switch must be a designated port."
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100096325/99f4e7eb/understanding-stp\uffferstp"
  },
  {
    "id": 221,
    "question": "Which of the following statements about link aggregation is correct?",
    "options": {
      "A": "GE electrical interfaces and GE optical interfaces cannot be added to the same Eth-Trunk interface.",
      "B": "Eth-Trunk interfaces cannot be nested.",
      "C": "When two devices are connected, it is necessary to ensure that the link aggregation mode on both devices is the same.",
      "D": "GE interface and FE interface cannot be added to the same Eth-Trunk interface."
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/knowledge/KB0000482703 https://support.huawei.com/enterprise/en/doc/EDOC1000060766/d8898e92/which-typesof\ufffeinterfacescan-join-the-same-eth-trunk"
  },
  {
    "id": 222,
    "question": "What is the total length of the VLAN frame format defined by IEEE802.1Q?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100088104"
  },
  {
    "id": 223,
    "question": "CSS refers to the combination of two switch devices that support cluster features and logically combine them into one switch device.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://info.support.huawei.com/infofinder/encyclopedia/en/CSS.html"
  },
  {
    "id": 224,
    "question": "The host uses the IP address 192.168.1.2 to access the Internet, which must go through NAT.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086645"
  },
  {
    "id": 225,
    "question": "Before the STA associates with the AP, it needs to exchange some messages to obtain the SSID. What are these messages?",
    "options": {
      "A": "Discovery",
      "B": "Beacon",
      "C": "Probe",
      "D": "Response Probe Request"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100112363/75acc8a8/staaccess"
  },
  {
    "id": 226,
    "question": "Which of the following statements about the MPLS Label statement is wrong?",
    "options": {
      "A": "The label is encapsulated between the network layer and the transport layer.",
      "B": "The tags are carried by the head of the packet, do not contain topology Information.",
      "C": "The label is used to uniquely identify the forwarding equivalence class FEC to which a packet belongs.",
      "D": "The label is a short identifier with a fixed length. It has only a local meaning."
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100118961"
  },
  {
    "id": 227,
    "question": "Which of the following refers to network communication? (Multiple choice)",
    "options": {
      "A": "Use instant messaging software (such as QQ, WeChat) to chat with friends",
      "B": "Use a computer to visit the company's official website",
      "C": "Use a computer to watch a video online",
      "D": "Download emails from the company mailbox to your computer"
    },
    "correct": [
      "A",
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://www.huawei.com/en/giv/communications-network-2030"
  },
  {
    "id": 228,
    "question": "In the VRP interface, use the command startup saved-configuration backup.cfg to configure the startup.cfg file for the next startup.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000041693/f6e1ef7f/startup\ufffesavedconfigura%C6%9Fon"
  },
  {
    "id": 229,
    "question": "Which of the following fields does the ARP packet format include? (Multiple choice)",
    "options": {
      "A": "Hardware Type",
      "B": "Protocol Address of sender",
      "C": "Operation Code",
      "D": "Protocol Type Verified"
    },
    "correct": [
      "A",
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://www.geeksforgeeks.org/arp-protocol-packet-format/"
  },
  {
    "id": 230,
    "question": "Both the pwd and dir commands in the VRP operating platform can view the file information under the current directory.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064353/35605cd/pwd-user\ufffeview"
  },
  {
    "id": 231,
    "question": "The OSI reference model from high-level to bottom-level is ().",
    "options": {
      "A": "Application layer, transport layer, network layer, data link layer, physical layer",
      "B": "Application layer, session layer, presentation layer, transport layer, network layer, data link layer, physical layer",
      "C": "Application layer, presentation layer, session layer, network layer, transport layer, data link layer, physical layer",
      "D": "Application layer, presentation layer, session layer, transport layer, network layer, data link layer, physical layer"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide #02, Page Number: 08"
  },
  {
    "id": 232,
    "question": "Which of the following attributes cannot be used as a parameter to measure Cost? (Multiple choice)",
    "options": {
      "A": "Bandwidth",
      "B": "sysname",
      "C": "Delay",
      "D": "Hop count"
    },
    "correct": [
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086956"
  },
  {
    "id": 233,
    "question": "A company applies for a Class C address segment, which needs to be evenly distributed to 8 subsidiaries. The largest subsidiary has 14 computers. Different subsidiaries must be in different network segments. The subnet mask should be designed as ().",
    "options": {
      "A": "255.255.255.240",
      "B": "255.255.255.128",
      "C": "255.255.255.192",
      "D": "255.255.255.0"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Slide 04 Page Number: 21"
  },
  {
    "id": 234,
    "question": "The priority of the LACP protocol is shown in the figure. Switch A and Switch B adopt LACP mode link aggregation, and all interfaces join the link aggregation group. At the same time, set the maximum number of active ports to 3. Which interface of switch A is not an active port?",
    "options": {
      "A": "G0/0/1",
      "B": "G0/0/3",
      "C": "G0/0/0",
      "D": "G0/0/2"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178168/b1d8b5a3/link\ufffeaggrega%C6%9Fon-inlacp-mode"
  },
  {
    "id": 235,
    "question": "If the Ethernet data frame Length/Type=0X0806, which of the following statements are correct? (Multiple choice)",
    "options": {
      "A": "The source MAC address of the data frame must not be FFFF-FFFF-FFFF",
      "B": "The data frame is an IEEE 802.3 frame",
      "C": "The data frame is an Ethernet II frame",
      "D": "The destination MAC address of the data frame may be FFFF-FFFF-FFFF"
    },
    "correct": [
      "A",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100198444/7404084d/ma c\ufffeaddress-tableconfiguration-commands Source: https://notes.networklessons.com/ethernet-frame-types"
  },
  {
    "id": 236,
    "question": "VLAN 4095 cannot be created on Huawei switches, and VLAN 1 cannot be created.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100278261/55c108dd/creating\ufffeand-deleting-a-vlan"
  },
  {
    "id": 237,
    "question": "Which of the following port states is not included in the RSTP protocol?",
    "options": {
      "A": "Learning",
      "B": "Discarding",
      "C": "Forwarding",
      "D": "Blocking"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100247750/2bd0e592/rstp\ufffeportroles-and-port-states"
  },
  {
    "id": 238,
    "question": "Which statement about the Hybrid port is correct?",
    "options": {
      "A": "When the Hybrid port sends data frames, it must carry a VLAN TAG",
      "B": "Hybrid port only receives data frames with a VLAN TAG",
      "C": "Hybrid port can strip the TAG of the VLAN in the direction of the interface",
      "D": "Hybrid port does not require PVID"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064351/923935bf/port-hybrid\ufffeuntagged-vlan"
  },
  {
    "id": 239,
    "question": "What elements can NAPT convert?",
    "options": {
      "A": "MAC address + port number",
      "B": "Only IP address",
      "C": "IP address + port number",
      "D": "Only MAC address"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 14, page number 20"
  },
  {
    "id": 240,
    "question": "What are the advantages of using the Dynamic Host Configuration Protocol DHCP to assign IP addresses? (Multiple choice)",
    "options": {
      "A": "Heavy workload and difficult to manage",
      "B": "Reuse of IP address can be realized",
      "C": "Avoid IP address conflicts",
      "D": "When the configuration information changes (such as DNS), only the administrator needs to modify it on the DHCP server to facilitate unified management"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei slide 15, page number 27"
  },
  {
    "id": 241,
    "question": "The role of the collaboration layer in the SDN architecture is to complete job deployment based on user intentions. OpenStack belongs to the business collaboration layer.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 20, page number 19 There is no collaboration layer in SDN."
  },
  {
    "id": 242,
    "question": "Which of the following statement about Python is incorrect?",
    "options": {
      "A": "Is a fully open-source high-level programming language",
      "B": "Has a rich third-party library",
      "C": "Have a clear grammatical structure, simple and easy to learn, colleagues run efficiently",
      "D": "can be used for the operation and maintenance of automation scripts, Artificial Intelligence, Data science, and many other fields"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Explanation: Although Python is considered an open-source language, the term \"fully open\ufffesource\" can be misleading. While much of Python's source code is freely available and can be modified and distributed under an open-source license, not every aspect of its development and distribution is entirely free from restrictions. Therefore, calling it fully open-source is not entirely accurate. It is open-source to a large extent, but not in an absolutely unrestricted way"
  },
  {
    "id": 243,
    "question": "The administrator has configured the AR2200 as shown in the figure. Then, which of the following description of the configuration information is correct?",
    "options": {
      "A": "The saved configuration file will be replaced by the running configuration file",
      "B": "If the user wants to clear the next startup configuration file of the device configuration, then should select \"N\"",
      "C": "If the user wants to clear the next startup configuration file of the device configuration, then should select \"Y\"",
      "D": "The next startup file of the device configuration will be retained"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification"
  },
  {
    "id": 244,
    "question": "When building a campus network, which of the following protocols can be used to avoid layer 2 loops?",
    "options": {
      "A": "SNMP",
      "B": "RSTP",
      "C": "NAT",
      "D": "OSPF"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 22, page number 26"
  },
  {
    "id": 245,
    "question": "The tree network topology is actually a hierarchical star structure, which makes it easy to expand the network scale, but the higher the level, the more serious the network problem caused by the node failure.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 01, page number 21 In the tree network topology the tree structure is actually a hierarchical star structure. \u27a2 Advantages: Multiple star networks can be quickly combined, which facilitates network expansion. \u27a2 Disadvantages: A fault on a node at a higher layer is more severe."
  },
  {
    "id": 246,
    "question": "The routing table is shown in the figure. Which of the following statements is correct? (Multiple choice)",
    "options": {
      "A": "The router forwards data packets with the destination IP address 10.0.3.3 from Ethernet0/0/0",
      "B": "Router from Ethernet0/0/0 forwarding destination IP address 10.0.2.2 packet",
      "C": "The router forwards data packets with the destination IP address 10.0.12.1 from Ethernet0/0/0",
      "D": "The NextHop of the destination network 10.0.3.3/32 is not directly connected, so the router will not forward packets with the destination IP address of 10.0.3.3"
    },
    "correct": [
      "A",
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei slide 05, page number 26"
  },
  {
    "id": 247,
    "question": "The network administrator uses Ping to test the connectivity of the network. Which of the following protocols may be used in this process? (Multiple choice)",
    "options": {
      "A": "ICMP",
      "B": "UDP",
      "C": "TCP",
      "D": "ARP"
    },
    "correct": [
      "A",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064365/f5ddba7b/understanding-arp"
  },
  {
    "id": 248,
    "question": "The router needs to modify the destination IP address in the data packet when forwarding data packets.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 05, page number 26"
  },
  {
    "id": 249,
    "question": "Which of the following descriptions about DD packets and LSA of OSPF is correct? (Multiple choice)",
    "options": {
      "A": "The header of an LSA can uniquely identify an LSA",
      "B": "The LSA header is only a small part of LSA",
      "C": "DD packet contains detailed information about LSA",
      "D": "The DD packet contains only LSA header information"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1: Source: https://support.huawei.com/enterprise/en/doc/EDOC1100174721/fd1dc73c/ospf-dd Justification#2: Source: https://support.huawei.com/enterprise/en/doc/EDOC1100174721/fd1dc73c/ospf-dd"
  },
  {
    "id": 250,
    "question": "Which of the following statements about the main functions of the router is wrong? (Multiple choice)",
    "options": {
      "A": "Realize the mutual communication between the same network disconnection equipment",
      "B": "Forwarding according to the source IP address of the received data packet",
      "C": "Establish routing tables through multiple protocols",
      "D": "Guide data forwarding according to the routing table"
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Slide 1, Page number 12 Explanation: \u27a2 Option A: Routers primarily facilitate communication between different networks. Devices within the same network can typically communicate directly without a router. \u27a2 Option B: Routers forward data packets based on the destination IP address. This address determines the packet's intended recipient and guides the router's forwarding decision."
  },
  {
    "id": 251,
    "question": "In the broadcast network as shown in the figure, OSPF runs on four routers in the same area and on the same network segment. OSPF will automatically elect one DR and multiple BDRs to achieve better backup results.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: verified from eNSP"
  },
  {
    "id": 252,
    "question": "The Router ID of the OSPF process takes effect immediately after the modification.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100082074 After the router has been running OSPF and selected its router ID, it still uses this router ID if the interface whose IP address is used as the router ID is Down or disappears (for example, the undo interface loopback loopback-number command is run) or a larger interface IP address exists. The router can obtain a new router ID only after a router ID is reconfigured for the router or an OSPF router ID is reconfigured and the OSPF process restarts."
  },
  {
    "id": 253,
    "question": "How many types of OSPF messages are there?",
    "options": {
      "A": "2",
      "B": "4",
      "C": "5",
      "D": "3"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 06, page number 18"
  },
  {
    "id": 254,
    "question": "In the network shown in the figure below, switch A and router A are connected through two links, and the two links are aggregated in manual load-sharing mode. The aggregated port number is 1, and the aggregated link performs data when forwarding, you need to carry VLAN TAG 100. Switch A uses the Trunk link. Which of the following configurations should be used for Switch A?",
    "options": {
      "A": "interface Eth-Trunk1 mode lacp-static port link-type trunk port trunk allow-pass vlan 100 interface GigabitEthernet0/0/1 eth-trunk 1 interface GigabitEthernet0/0/2 eth-trunk 1",
      "B": "interface Eth-Trunk1 port link-type trunk port trunk allow-pass vlan 100 interface GigabitEthernet0/0/1 eth-trunk 1 interface GigabitEthernet0/0/2 eth-trunk 1",
      "C": "interface Vlanif100 ip address 10.0.12.1 255.255.255.0",
      "D": "interface Eth-Trunk1 ip address 10.0.12.1 255.255.255.0"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 11, page number 37"
  },
  {
    "id": 255,
    "question": "By default, the port cost calculated by STP has a certain relationship with the port bandwidth; that is, the greater the bandwidth, the () the cost.",
    "options": {
      "A": "Greater",
      "B": "Consistent",
      "C": "Not necessarily",
      "D": "Smaller"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 9, page number 16"
  },
  {
    "id": 256,
    "question": "Which of the following port sales does not the RSTP protocol include? (Multiple choice)",
    "options": {
      "A": "Learning",
      "B": "Discarding",
      "C": "Listening",
      "D": "Forwarding"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei slide 9, page number 51"
  },
  {
    "id": 257,
    "question": "In the RSTP standard, in order to improve the convergence speed, the port switch is directly connected to the terminal can be defined as ().",
    "options": {
      "A": "Edge port",
      "B": "Root port",
      "C": "Fast port",
      "D": "Backup port"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 9, page number 50"
  },
  {
    "id": 258,
    "question": "The configuration information of a certain port of the switch is shown in the figure, then the port will strip off the VLAN TAG when sending data frames carrying which VLAN?",
    "options": {
      "A": "4.6",
      "B": "1.4.5.6",
      "C": "4.5.6",
      "D": "1.4.6"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 8, page number 22 A hybrid interface requires the configuration of a PVID (Port VLAN ID) as well as two VLAN ID lists: one for untagged VLANs and another for tagged VLANs. By default, VLAN 1 is included in the untagged VLAN ID list. Only frames with VLAN IDs specified in these two lists are allowed to pass through the hybrid interface. This interface type supports the transmission of tagged frames from multiple VLANs and can send frames either tagged or untagged, depending on the VLAN settings. Unlike trunk interfaces, hybrid interfaces are capable of handling untagged frames from multiple VLANs, offering more flexible VLAN traffic management."
  },
  {
    "id": 259,
    "question": "The Backup ports in RSTP may alternatively fail the root port.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 09, page number 47 Description: If the root port fails, the alternate will be the alternate port, not the backup port. Huawei slide 09, page number 49 notes:"
  },
  {
    "id": 260,
    "question": "As shown in the figure, all four switches run STP, and various parameters adopt default values. If the G0/0/2 port of switch C is blocked and the configuration BPDU cannot be sent through this port, how long will it take for the blocked port in the network to enter the forwarding state?",
    "options": {
      "A": "about 3 seconds",
      "B": "about 50 seconds",
      "C": "about 30 seconds",
      "D": "about 15 seconds"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide 09, page number 36 Notes: Convergence time: It takes about 50s to recover from an indirect link failure, which is equal to the value of the max age timer plus twice the value of the Forward Delay timer."
  },
  {
    "id": 261,
    "question": "If the largest number in an ACL rule is 12, by default, the user does not specify a number when configuring a new rule, then what is the number assigned by the system for the new rule?",
    "options": {
      "A": "13",
      "B": "15",
      "C": "14",
      "D": "16"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 12, page number 9 NOTES: Rule ID and step: Rule ID: Each ACL rule has an ID, which identifies the rule. Rule IDs can be manually defined or automatically allocated by the system. Step: When the system automatically allocates IDs to ACL rules, the increment between neighbouring rule IDs is called a step. The default step is 5. Therefore, rule IDs are 5, 10, 15, and so on."
  },
  {
    "id": 262,
    "question": "Complete the ACL configuration shown in the figure on the router RTA, which of the following description is correct?",
    "options": {
      "A": "The VRP system will not adjust the sequence number, but will first match the rule permit source 20.1.1.0 0.0.0.255",
      "B": "Configuration error, the sequence number of the rules must be configured from small to large",
      "C": "The VRP system will adjust the sequence number of the first rule to 5 according to the configuration sequence",
      "D": "The VRP system will first match the rule by numbering in sequence deny source 20.1.1.0 0.0.0.255"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 12, page number 16"
  },
  {
    "id": 263,
    "question": "Using the ACL shown in the figure on the router RTA to match routing entries, which of the following entries will be matched? (Multiple choice)",
    "options": {
      "A": "172.16.1.0/24",
      "B": "192.17.0.0/24",
      "C": "172.18.0.0/16",
      "D": "172.16.1.1/32"
    },
    "correct": [
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei slide 12, page number 10 Notes: When matching an IP address in a network rule, a 32-bit mask called a wildcard is used to determine which bits must match exactly and which can vary. This wildcard, expressed in dotted decimal notation, uses the value 0 to indicate that a corresponding bit must match and 1 to indicate that it does not matter. For example, Rule 5 denies packets from the source IP address 10.1.1.1, using a wildcard of all 0s to ensure an exact match at every bit level. In contrast, Rule 15 permits packets from the 10.1.1.0/24 network segment by using a wildcard of 0.0.0.255 (with the last eight bits set to 1), allowing any value in the last byte. To match the network address 192.168.1.1/24, the network bits must be fixed while the host bits can vary, resulting in a wildcard of 0.0.0.255."
  },
  {
    "id": 264,
    "question": "The configuration information of a router is shown in the figure. Which of the following statements are correct? (Multiple choice)",
    "options": {
      "A": "The authentication method adopted by the domain with the domain name huawei is local ID",
      "B": "The authorization method for the domain with the domain name huawei is local authorization",
      "C": "Use the username huawei for authentication; the password needs to be 654321",
      "D": "The domain with the domain name huawei does not use the billing plan"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: For option B: https://support.huawei.com/enterprise/en/doc/EDOC1100156624/9713e4a4/configuring\ufffelocal-authentication-and-authorization For option C: Huawei, Slide 13, page number 15 For example: huawei@huawei password 654321. Running this command will allow to authenticate the user by username \u201chuawei\u201d & password \u201c654321\u201d. For option D: This statement is correct. There is no mention of a billing plan in the provided configuration for the domain with the domain name \"huawei\u201d."
  },
  {
    "id": 265,
    "question": "What is the main function of the DNS protocol?",
    "options": {
      "A": "Domain name resolution",
      "B": "File Transfer",
      "C": "Remote access",
      "D": "Mail transmission"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#01: Source: https://support.huawei.com/enterprise/en/doc/EDOC1100278532/612469cc/overview\ufffeof-dns Justification#02 Source: https://unit42.paloaltonetworks.com/dns-vulnerabilities/"
  },
  {
    "id": 266,
    "question": "What is the data link layer MAC address of each VAP on the AP?",
    "options": {
      "A": "SSID",
      "B": "BSS",
      "C": "ESS",
      "D": "BSSID"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 16, page number 22 BSSID: AP's MAC address on the data link layer. STAs can discover and find an AP based on the BSSID. Each BSS must have a unique BSSID. Therefore, the AP's MAC address is used to ensure the uniqueness of the BSSID"
  },
  {
    "id": 267,
    "question": "Which of the following does not include the advantages of Wi-Fi 6 compared to Wi-Fi 5?",
    "options": {
      "A": "Higher bandwidth",
      "B": "Lower transmission delay",
      "C": "Higher power consumption",
      "D": "Higher number of access terminals per AP"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 16, page number 78"
  },
  {
    "id": 268,
    "question": "PPPoE session can only use CHAP authentication",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide 17, page 15 The course also covers the implementation of the Point-to-Point Protocol (PPP), focusing on its parameter negotiation during link establishment, including authentication and network layer negotiations. It provides a detailed analysis of the two commonly used PPP authentication protocols: PAP (Password Authentication Protocol) and CHAP (Challenge Handshake Authentication Protocol), explaining their operational procedures and differences. While both ends of a PPP link can use different authentication protocols to verify each other, the device being authenticated must support the authentication method specified by the authenticating device and must be correctly configured with valid credentials, such as a username and password."
  },
  {
    "id": 269,
    "question": "Which of the following types does an IPv6 address contain? (Multiple choice)",
    "options": {
      "A": "Unicast address",
      "B": "Broadcast address",
      "C": "Multicast address",
      "D": "Anycast address"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 17, Page # 15"
  },
  {
    "id": 270,
    "question": "Regarding the IPv6 address 2031:0000:720C:0000:0000:09E0:839A:130B, which of the following abbreviations is correct?",
    "options": {
      "A": "2031:0:720C:0:0:9E:839A:130B",
      "B": "2031:0:720C::9E0:839A:130B",
      "C": "2031:0:720C:0:0:9E0:839A:130B",
      "D": "2031::720C::9E0:839A:130B"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 19, Page # 14"
  },
  {
    "id": 271,
    "question": "Which of the following protocols does the RA message used by IPv6 stateless auto configuration belong to",
    "options": {
      "A": "IGMPv6",
      "B": "ICMPv6",
      "C": "UDPv6",
      "D": "TCPv6"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification #1 ICMPv6 Router Advertisement (RA) Message: Routers send out Router Advertisement message periodically, or in response to a Router Solicitation message. The ICMPv6 Router Advertisement messages include information about prefixes and some flag bits. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100174721/ff83a724/icmpv6-packet\ufffeformat Justification #2 Source: Huawei Lecture # 19, Page # 28 Notes: IPv6 supports stateful and stateless address autoconfiguration. The managed address configuration flag (M flag) and other stateful configuration flag (O flag) in ICMPv6 RA messages are used to control the mode in which terminals automatically obtain addresses."
  },
  {
    "id": 272,
    "question": "When planning the campus network, which of the following mask lengths is recommended for device interconnection IP addresses?",
    "options": {
      "A": "16",
      "B": "32",
      "C": "24",
      "D": "30"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 22, Page # 18"
  },
  {
    "id": 273,
    "question": "Which of the following are related to the purpose of encapsulation and decapsulation? (Multiple choice)",
    "options": {
      "A": "Encapsulation and decapsulation are important steps to realize different protocol functions.",
      "B": "Interworking between different networks.",
      "C": "Shorten the length of the message.",
      "D": "Encapsulation and decapsulation can complete the network fault location"
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 4, Page # 7 Notes: - For example, after a TCP header is added to the upper-layer data in a PDU at the transport layer, the PDU is called a segment. The data segment is transmitted to the network layer. After an IP header is added to the PDU at the network layer, the PDU is called a packet. The data packet is transmitted to the data link layer. After the data link layer header and tailer are encapsulated into the PDU, the PDU becomes a frame. Ultimately, the frame is converted into bits and transmitted through network media. - The process in which data is delivered following the protocol suite from top to bottom and is added with headers and tails is called encapsulation."
  },
  {
    "id": 274,
    "question": "Which of the following statements about the transport layer protocol is correct? (Multiple choice)",
    "options": {
      "A": "UDP is suitable for the transmission of delay-sensitive traffic, and can be reorganized according to the sequence number field in the message header",
      "B": "The range of well-known port numbers is 0\u20131023",
      "C": "UDP uses the STNOACK flag to request and confirm the establishment of a connection",
      "D": "TCP establishes a connection is a three-way handshake process; TCP terminates the connection will have to go through a four-way handshake"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 B: Well-known ports: also called system ports. The port number ranges from 0 to 1023. D: TCP connection (three-way handshake) and disconnection (four-way wavehand) Source: B: https://support.huawei.com/enterprise/en/doc/EDOC1100297670 D: https://forum.huawei.com/enterprise/intl/en/thread/transmission-control-protocol\ufffetcp/667261370510491648?blogId=667261370510491648 Justification#2 Source: Huawei Lecture # 2, Slide # 24"
  },
  {
    "id": 275,
    "question": "Which of the following descriptions about wireless devices is correct?",
    "options": {
      "A": "The wireless device has no wired interface",
      "B": "FIT AP-like independent user access, Authentication, Forwarding services and other functions",
      "C": "Wireless Controller AC-like at the aggregation layer of the entire network, providing high\ufffespeed, Safe, and Reliable VLAN business",
      "D": "FAT AP generally works with a wireless controller"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 16, Page # 22 \u2022 An AC is usually deployed at the aggregation layer of a network to provide high-speed, secure, and reliable WLAN services."
  },
  {
    "id": 276,
    "question": "What is the full name of the general routing platform VRP?",
    "options": {
      "A": "Versatile Redundancy Platform",
      "B": "Versatile Routing Protocol",
      "C": "Versatile Routing Platform",
      "D": "Virtual Routing Platform"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification#1 VRP (Versatile Routing Platform) is the Operating System that many Huawei devices operate. Source: https://forum.huawei.com/enterprise/intl/en/thread/what-is-vrp-versatile-routing\ufffeplatform/667281128492515329?utm_source=chatgpt.com&blogId=667281128492515329 Justification#2 Source: Huawei Lecture # 2, Slide # 2"
  },
  {
    "id": 277,
    "question": "VRP supports OSPF multi-process. If the process number is not specified when OSPF is enabled, the process number used by default is ().",
    "options": {
      "A": "10",
      "B": "100",
      "C": "0",
      "D": "1"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification An OSPF process is created, and the OSPF view is displayed. The parameter process-id specifies the ID of an OSPF process. The default value is 1. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100034072/270867b9/creating-an-ospf\ufffeprocess"
  },
  {
    "id": 278,
    "question": "The network is shown in the figure below. The administrator hopes that RTA uses static routing, and preferentially sends data packets to RTB's Loopback0 interface through G0/0/1 port, while G0/0/2 serves as a backup. So, how to configure on RTA to achieve this requirement?",
    "options": {
      "A": "ip route-static 10.0.2.2 255.255.255.255 10.0.12.2 ip route-static 10.0.2.2 255.255.255.255 10.0.21.2 preference 40",
      "B": "ip route-static 10.0.2.2 255.255.255.255 10.0.12.2 preference 70 ip route-static 10.0.2.2 255.255.255.255 10.0.21.2",
      "C": "ip route-static 10.0.2.2 255.255.255.255 10.0.12.2 ip route-static 10.0.2.2 255.255.255.255 10.0.21.2",
      "D": "ip route-static 10.0.2.2 255.255.255.255 10.0.12.2 ip route-static 10.0.2.2 255.255.255.255 10.0.21.2 preference 70"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 5, Slide # 19 Explanation: The default priority of a static route is 60. So, RTA will prefer to send the data packet through G0/0/1 first. For the second option, it will then prefer G0/0/2 since the preference is set to 70. (Less has more preference)."
  },
  {
    "id": 279,
    "question": "If the broadcast address of a network is 172.16.1.255, then what may its network address be?",
    "options": {
      "A": "172.16.1.128",
      "B": "172.16.2.0",
      "C": "172.16.1.1",
      "D": "172.86.1.253"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification \u2022 Options B & D cannot be chosen as they are completely different from the IP given, as they come after the given IP. \u2022 Option C can\u2019t be the correct answer because if the subnet is 24, then the network IP would be 172.16.1.0, and if the subnet is 25, then the network IP would be 172.16.1.128, which is option A."
  },
  {
    "id": 280,
    "question": "The administrator wants to configure a hundred IP addresses on the G0/0/0 interface of the router. Which of the following addresses is correct?",
    "options": {
      "A": "192.168.10.112/30",
      "B": "237.6.1.2/24",
      "C": "127.3.1.4/28",
      "D": "145.4.2.55/26"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Explanation: A. 192.168.10.112/30 \u2022 /30 subnet mask gives 2 usable IP addresses.-Not suitable since it only provides 2 usable addresses. B. 237.6.1.2/24 \u2022 /24 subnet mask gives 256 - 2 = 254 usable IP addresses-Suitable as it provides more than 100 usable IP addresses. C. 127.3.1.4/28 \u2022 /28 subnet mask gives 16 - 2 = 14 usable IP addresses-Not suitable since it provides fewer than 100 usable addresses. D. 145.4.2.55/26 \u2022 /26 subnet mask gives 64 - 2 = 62 usable IP addresses-Not suitable since it provides fewer than 100 usable addresses. Therefore, the correct answer is B. 237.6.1.2/24, which provides a sufficient number of usable IP addresses (254) to accommodate a hundred IP addresses on the G0/0/0 interface of the router."
  },
  {
    "id": 281,
    "question": "The network shown below, it is desirable host traffic network administrator during planning A destined for host B data packets through the router between the G0/0/3 interfaces, the host B to the host PC A data packet through the router Between the G0/0/4 interface, which of the following commands can achieve this requirement? (Multiple choice)",
    "options": {
      "A": "RTA : ip route-static 10.0.12.5 255.255.255.252 11.0.12.2 RTB : ip route-static 10.0.12.1 255.255.255.252 11.0.12.5",
      "B": "RTA : ip route-static 10.0.12.5 255.255.255.252 11.0.12.6 RTB : ip route-static 10.0.12.1 255.255.255.252 11.0.12.1",
      "C": "RTA : ip route-static 0.0.0.0 0.0.0.0 11.0.12.2 RTB : ip route-static 0.0.0.0 0.0.0.0 11.0.12.5",
      "D": "RTA : ip route-static 0.0.0.0 0.0.0.0 11.0.12.6 RTB : ip route-static 0.0.0.0 0.0.0.0 11.0.12.1"
    },
    "correct": [
      "A",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: \u2022 In option A, the data packet received by router A with destination address 10.0.12.5 should be sent to the G0/0/3 interface (11.0.12.2) of router B (there might be a mistake in Host B\u2019s IP address as it should be of network 10.0.12.4/30, otherwise communication between router B and Host B cannot be possible). \u2022 In option C, the data packet received by router A with any destination address will be sent to the G0/0/3 interface (11.0.12.2) of router B. And the data packet received by router B with any destination address will be sent to the G0/0/4 interface (11.0.12.5) of router A."
  },
  {
    "id": 282,
    "question": "In the network as shown in the figure below, the host has an ARP cache. Which of the following statements is correct? (Multiple Choice)",
    "options": {
      "A": "The following entries may exist in the ARP cache of host A. 10.0.12.2 MAC-C",
      "B": "The router needs to be configured with static routing, otherwise host A and host B cannot communicate in both directions",
      "C": "The following entries exist in the ARP cache of host A 11.0.12.1 MAC-B",
      "D": "Host A and Host B can communicate in both directions"
    },
    "correct": [
      "A",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 \u2022 In option A, Host A needs to communicate with its default gateway (RTA at 10.0.12.2) to reach outside networks. So it ARP-resolves 10.0.12.2 to MAC-C and saves it in its ARP table. \u2022 For option D, The router (RTA) connects both networks (10.0.12.0/24 and 11.0.12.0/24). Since their default gateways are set properly and interfaces exist, they can communicate through RTA Justification#2 Source: Huawei Lecture # 2, Slide # 30"
  },
  {
    "id": 283,
    "question": "Compared with STP, which of the following port roles are newly defined in RSTP? (Multiple choice)",
    "options": {
      "A": "Designated port",
      "B": "Root port",
      "C": "Alternate port",
      "D": "Backup port"
    },
    "correct": [
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 RSTP defines four port roles: root port, designated port, alternate port, and backup port. Source : https://info.support.huawei.com/hedex/api/pages/EDOC1100363264/AEN0403J/05/resources /vrp/feature_stp_rstp_mstp_0010.html Justification#2 Source: Huawei Lecture # 9 Slide # 49"
  },
  {
    "id": 284,
    "question": "The Layer 2 switch is a data link layer device, which can identify the MAC address information in the data frame, forward data according to the MAC address, and record these MAC addresses and corresponding port information in its own MAC address table.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1 The device dynamically builds the address table by using the MAC source address of the frames received. When the device receives a frame for a MAC destination address not listed in its address table, it floods the frame to all LAN ports of the same VLAN except the port that received the frame. When the destination station replies, the device adds its relevant MAC source address and port ID to the address table. Source: https://www.cisco.com/c/en/us/td/docs/switches/datacenter/sw/4_2/nx\ufffeos/layer2/configuration/guide/Cisco_Nexus_7000_Series_NX\ufffeOS_Layer_2_Switching_Configuration_Guide_Release_4-2_chapter3.html Justification#2 Source: Huawei Lecture # 7, Slide # 22"
  },
  {
    "id": 285,
    "question": "The two switches shown in the figure below have both enabled the STP protocol. Which port will eventually be in the Blocking state?",
    "options": {
      "A": "G0/0/2 port of SWB",
      "B": "G0/0/3 port of SWB",
      "C": "G0/0/2 port of SWA",
      "D": "G0/0/3 port of SWA"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 9 Slide # 24 Explanation:"
  },
  {
    "id": 286,
    "question": "On Huawei switches, you can use the command vlan batch to create multiple VLANs in batches, simplifying the configuration process.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1 [HUAWEI] vlan batch 11 to 20 Create 10 contiguous VLANs: VLAN 11 to VLAN 20. <HUAWEI> system-view Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178168/a197c0b1/how-do\ufffei-create-vlans-in-a-batch Justification#2 Source: Huawei Lecture # 8 Slide # 31"
  },
  {
    "id": 287,
    "question": "As shown in the figure, the two switches use the default parameters to run STP, the configuration command STP root primary is used on switch A, and the configuration command STP priority 0 is used on switch B. Then which port will be blocked?",
    "options": {
      "A": "G0/0/1 of switch B",
      "B": "G0/0/1 of switch A",
      "C": "HUB's G0/0/3",
      "D": "G0/0/2 of switch A"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Explanation: Because in switch A, two links are connected to the hub, so one is the root port and the other is blocked, which has the highest port ID."
  },
  {
    "id": 288,
    "question": "In the network shown in the figure below, two switches are connected by four links. COPPER refers to the electrical interface, and FIBER refers to the optical interface. Which of the following two interfaces can achieve link aggregation?",
    "options": {
      "A": "G0/0/2 and G0/0/1",
      "B": "G0/0/3 and FE0/0/3",
      "C": "G0/0/3 and G0/0/1",
      "D": "G0/0/2 and FE0/0/3"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Explanation: Link aggregation groups (LAGs) combine multiple physical ports into a single logical link, increasing bandwidth and providing redundancy. For LAGs to function, the ports must be of the same type (copper or fiber) and speed. In the image, both G0/0/3 and G0/0/1 are copper Gigabit Ethernet interfaces, making them compatible for LAGs. - A:G0/0/2 and G0/0/1: While both are copper interfaces, G0/0/2 is Fast Ethernet while G0/0/1 is Gigabit Ethernet. - B:G0/0/3 and FE0/0/3: Though both are Gigabit Ethernet interfaces, G0/0/3 is copper while FE0/0/3 is fiber."
  },
  {
    "id": 289,
    "question": "Trunk ports can allow multiple VLANs to pass, including VLAN4096.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification The port trunk allow-pass vlan command adds a trunk interface to the specified VLANs. The undo port trunk allow-pass vlan command deletes a trunk interface from the specified VLANs. By default, a trunk interface is in VLAN 1. Format port trunk allow-pass vlan { { vlan-id1 [ to vlan-id2 ] }&<1-10> | all } undo port trunk allow-pass vlan { { vlan-id1 [ to vlan-id2 ] }&<1-10> | all } Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064352/a0f4f7e4/port\ufffetrunk-allow-pass-vlan"
  },
  {
    "id": 290,
    "question": "The following statements are about the election of active ports in the link aggregation LACP mode. Which is correct?",
    "options": {
      "A": "Compare the priority of the interface first, and it is impossible to determine the better one to continue comparing the interface number, the smaller the better.",
      "B": "Only compare interface priority",
      "C": "Compare device priority",
      "D": "Only compare interface numbers"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1 LACP uses the port priority to decide which ports should be put in standby mode when there is a hardware limitation that prevents all compatible ports from aggregating. LACP also uses the port priority with the port number to form the port identifier. Source: https://www.cisco.com/c/en/us/td/docs/switches/metro/me1200/config/guide/b_nid_config_b ook/b_nid_config_book_chapter_011000.html Justification#2 Source: Huawei Lecture # 11, Slide # 20"
  },
  {
    "id": 291,
    "question": "Which of the following parameters is not included in the configuration BPDU of the STP protocol?",
    "options": {
      "A": "Port ID",
      "B": "VLAN ID",
      "C": "Bridge ID",
      "D": "Root ID"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 Field Bytes Description Root Identifier 8 Indicates the BID of the current root bridge. Bridge Identifier 8 Indicates the BID of the bridge that sends the BPDU. Port Identifier 2 Indicates the ID of the port that sends the BPDU. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100198844/e99e1364/stp-bpdu-format Justification#2 Source: Huawei Lecture # 9, Slide # 21"
  },
  {
    "id": 292,
    "question": "Which of the following options are configured in a Layer 2 ACL? (Multiple choices)",
    "options": {
      "A": "rule 10 permit 12-protoco1 arp",
      "B": "rule 25 permit source 192.168.1.1 0.0.0.0",
      "C": "rule 20 permit source-mac 0203-0405-0607",
      "D": "rule 15 permit vlan-id 100"
    },
    "correct": [
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 A Layer 2 ACL defines rules to filter IPv4 and IPv6 packets based on Ethernet frame information, such as source MAC addresses, destination MAC addresses, VLANs, and Layer 2 protocol types. This rule specifies a source MAC address and VLAN ID, which is a Layer 2 attribute. Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178177/c18db3d9/configuring-a\ufffelayer-2-acl Justification#2 Source: Huawei Lecture # 12, Slide # 12"
  },
  {
    "id": 293,
    "question": "A company has 50 private IP addresses. The administrator uses NAT technology to connect the company\u2019s network to the public network, but the company has only one public network address, which is not fixed. Which of the following NAT conversion methods meets the needs?",
    "options": {
      "A": "easy-ip",
      "B": "NAPT",
      "C": "Static NAT",
      "D": "Basic NAT"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 NAPT translates both source IP addresses and ports (default post-NAT port range: 2048\u2013 65535) to allow multiple private addresses to be translated into the same public address. Source: https://support.huawei.com/enterprisesearch/#/index?keyword=napt&lang=en&searchModel Type=30&searchType=SUPE_DOC&site=0&sortType=Relevance&pageSize=20&start=1& ebgSearchFlag=true Justification#2 Source: Huawei Lecture # 22, Slide # 27"
  },
  {
    "id": 294,
    "question": "In the network shown in the figure, the administrator hopes that all hosts cannot access the web service (the port number is 80), and other services are normally accessed, so in the interface configuration of G0/0/1, the traffic filter outbound needs to define which ACL rule?",
    "options": {
      "A": "acl number 3000 rule 5 deny tcp destination-port eq www rule 10 permit ip",
      "B": "acl number 3001 rule 5 deny udp destination-port eq www rule 10 permit ip",
      "C": "acl number 3003 rule 5 permit ip rule 10 deny udp destination-port eq www",
      "D": "acl number 3002 rule 5 permit ip rule 10 deny tcp destination-port eq www"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 12, Slide # 23 Explanation: To block all web traffic (port 80) while allowing all other services, you need an ACL that:"
  },
  {
    "id": 295,
    "question": "At present, the company has a network administrator, and the AR2200 in the company network can be remotely managed by directly entering the password through Telnet. After the two new network administrators arrived, the company hopes to assign their own user names and passwords to all administrators, as well as different levels of authority. So, how should it be done? (Multiple choices)",
    "options": {
      "A": "Each administrator uses a different public IP address of the device when running the Telnet command",
      "B": "The user authentication mode configured by Telnet must be selected AAA mode",
      "C": "When configuring each administrator's account, different permission levels need to be configured",
      "D": "Configure three user names and their corresponding passwords in the AAA view"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification B) The authentication mode must be specified on the device; otherwise, users cannot log in to the device through Telnet. The device supports non-authentication, password authentication, and AAA authentication, in which AAA authentication has the highest security. C) Level Description Administrator An administrator has partial administrative permissions on the storage device but cannot manage users, upgrade the storage device, modify the system time, perform batch configuration, restart the device, or power off the device. D) It is recommended to define a username and password on the access server before you start the AAA configuration Source: B) https://support.huawei.com/enterprise/en/doc/EDOC1000057410?section=j03w&topicName=configur ing-authentication-for-telnet-login-users-aaa-local-authentication C) https://support.huawei.com/enterprise/en/doc/EDOC1100112625/b1a6458f/user-levels-roles-and\ufffepermissions D) https://www.cisco.com/c/en/us/support/docs/security-vpn/terminal-access-controller-access\ufffecontrol-system-tacacs-/10384-security.html Explanation: - B (AAA mode) ensures that user authentication is managed centrally, enhancing security by leveraging a dedicated authentication server. - C (Different permission levels) ensures that administrators have appropriate access based on their roles, reducing the risk of unauthorized access or unintended changes. - D (Configuring usernames and passwords in AAA) is necessary to enforce individual authentication credentials for each administrator, ensuring accountability and facilitating easier management of access."
  },
  {
    "id": 296,
    "question": "What is the main function of the DHCP DISCOVER message?",
    "options": {
      "A": "The server's confirmation response to the REQUEST message",
      "B": "The client is used to find the DHCP server",
      "C": "The client requests configuration confirmation, or renews the lease",
      "D": "The DHCP server is used to respond to the DHCP DISCOVER message, which carries various configuration information"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification DHCP Message Description DHCP Discover A DHCP client broadcasts this message to locate a DHCP server when the client attempts to connect to a network for the first time. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100276747/225eec10/dhcp\ufffemessages Justification Source: Huawei Lecture # 15, Slide # 28"
  },
  {
    "id": 297,
    "question": "Which of the following network parameters can be assigned by the Dynamic Host Configuration Protocol DHCP? (Multiple choices)",
    "options": {
      "A": "IP address",
      "B": "Gateway address",
      "C": "Operating system name",
      "D": "DNS address"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 A & B) A DHCP client sends a message to a DHCP server to request configuration parameters, such as the IP address, subnet mask, and default gateway address. D) The DHCP server can be configured to assign additional parameters such as the IP address of the Domain Name System (DNS) server Source: A & B) https://support.huawei.com/enterprise/en/doc/EDOC1100279014/4b28c08d/understanding\ufffedhcp D) https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_dhcp/configuration/12-4/dhcp- 12-4-book/config-dhcp-server.html Justification#2 Source: Huawei Lecture # 15, Slide # 27"
  },
  {
    "id": 298,
    "question": "In the WLAN architecture, the FIT AP cannot work independently and needs to be managed by the AC. Which of the following protocols are used to communicate between FIT AP and AC?",
    "options": {
      "A": "IPsec",
      "B": "WEP",
      "C": "CAPWAP",
      "D": "WAP"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification#1 Control and Provisioning of Wireless Access Points (CAPWAP) provides a universal encapsulation and transmission mechanism widely applied to wireless local area networks (WLANs), implementing communication between access points (APs) and WLAN access controllers (WACs). Source: https://support.huawei.com/enterprise/en/doc/EDOC1100334297/2471df23/understanding\ufffecapwap Justification#2 Source: Huawei Lecture # 16, Slide # 30"
  },
  {
    "id": 299,
    "question": "What is the first operation performed by the FIT AP after obtaining the AC's IP address?",
    "options": {
      "A": "Upgrade software version",
      "B": "Download the configuration file",
      "C": "Establish CAPWAP tunnel",
      "D": "Request configuration file"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification#1 An AC IP address list is preconfigured on the AP. When the AP goes online, it unicasts a Discovery Request packet to each AC whose IP address is specified in the preconfigured AC IP address list. After receiving the Discovery Request packet, the ACs return Discovery Response packets to the AP. The AP then selects an AC to establish a CAPWAP tunnel according to the received Discovery Response packets. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100364427/78331d51/ap-online\ufffeprocess Justification#2 Source: Huawei Lecture # 16, Slide # 30"
  },
  {
    "id": 300,
    "question": "How many types of data flows with different service levels can be marked based on MPLS labels?",
    "options": {
      "A": "4",
      "B": "2",
      "C": "16",
      "D": "8"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification#1 \u2022 MPLS DiffServ On an MPLS network, EXP values are used to identify a maximum of eight service priorities. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100335695/b0d08e70/class\ufffebased-qos-configuration Justification#2 \u2022 Selection based on number of service types: Up to eight PHBs are supported if only E-LSPs are used. To support more than eight PHBs, you must use L-LSPs or use both E-LSPs and L-LSPs. Figure 1-1444 Structure of the MPLS packet header The Exp value can be copied from the DSCP or IP Precedence in an IP packet or be set by MPLS network carriers. The LSP whose PHB is inferred from the Exp field is called an E-LSP, which is short for Exp-Inferred-PHB Scheduling Class (PSC) LSP. The E-LSP scheme is applicable to networks that support not more than eight PHBs. The IP Precedence field in an IP header also has three bits, same as the Exp field length, which allows one-to-one mapping. However, the DSCP field in an IP header has six bits, different from the Exp length, which does not allow complete mapping between an E-LSP and an IP QoS. As the IEEE standard defines, the three left-most bits in the DSCP field (the CSCP value) correspond to the Exp value, regardless of what the three right-most bits are. In the E-LSP scheme, traffic classification is performed when an MPLS packet enters a device. The Exp value carried in the packet is mapped to the service class and drop precedence of the device. After traffic classification, QoS operations on an MPLS network, such as traffic shaping, traffic policing, and congestion avoidance, are implemented in the same manner as those on an IP network. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100279023/f46b5cc0/mpls\ufffediffservmodeconfiguration"
  },
  {
    "id": 301,
    "question": "Which of the following functions does the LCP protocol in the PPP protocol support? (Multiple Choice)",
    "options": {
      "A": "Negotiate the network layer address",
      "B": "Negotiate an authentication agreement",
      "C": "Detect link loops",
      "D": "Negotiate the maximum receiving unit MRU"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 B & C) It can provide loop detection, authentication, transmission encryption,[2] and data compression. D) The ppp mru command sets the maximum receive unit (MRU) in PPP negotiation. Source: B & C) https://en.wikipedia.org/wiki/Point-to-Point_Protocol D) https://info.support.huawei.com/hedex/api/pages/EDOC1100277644/AEM10221/03/resource s/command/yunshan/PPP_MRU.html Justification#2"
  },
  {
    "id": 302,
    "question": "The network management system can only view the operating status of the device through the SNMP protocol, but cannot issue configurations.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 18, Slide # 6"
  },
  {
    "id": 303,
    "question": "The network devices running the SNMP protocol are running locally-an agent process.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1 A router that runs the SNMP server program is called an agent, Source: https://www.geeksforgeeks.org/simple-network-management-protocol-snmp/ Justification#2 Source: Huawei Lecture # 18 Slide # 11"
  },
  {
    "id": 304,
    "question": "Which extension headers are supported by IPv6 packets? (Multiple choice)",
    "options": {
      "A": "Destination option extension header",
      "B": "Fragmentation extension header",
      "C": "Hop-by-hop option extension header",
      "D": "VLAN extension header"
    },
    "correct": [
      "A",
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification#1 Order Header Type Next Header Code 2 Hop-by-Hop Options 0 3 Destination Options (with Routing Options) 60 5 Fragment Header 44 Source: https://www.cisco.com/en/US/technologies/tk648/tk872/technologies_white_paper0900aecd8 054d37d.html Justification#2 Source: Huawei Lecture # 19 Slide # 10"
  },
  {
    "id": 305,
    "question": "Which of the following are not open interfaces of Huawei network equipment? (Multiple choice)",
    "options": {
      "A": "NETCONF",
      "B": "RESTCONF",
      "C": "JSON",
      "D": "XML"
    },
    "correct": [
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 D) NETCONF uses Extensible Markup Language (XML)-based data encoding for the configuration data and protocol messages C) The RESTCONF client obtains both configuration and status data from a running RESTCONF server. After processing the user request, the server replies with a response to the client. The request and response messages are coded in either XML or JavaScript Object Notation (JSON) format. Source: D) https://info.support.huawei.com/info-finder/encyclopedia/en/NETCONF.html C) https://support.huawei.com/enterprise/en/doc/EDOC1100278266/3e5858fb/restconf\ufffefundamentals Explanation: Therefore, in the context of Huawei network equipment, NETCONF and RESTCONF are considered open interfaces, while JSON and XML serve as data formats utilized by these interfaces. Justification#2 Source: Huawei Lecture # 20, Slide # 20"
  },
  {
    "id": 306,
    "question": "Which of the following are not the characteristics of a small-sized campus network?",
    "options": {
      "A": "Simple network level",
      "B": "Fewer users",
      "C": "Simple network requirements",
      "D": "Wide coverage"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification#1 The LAN is the networking infrastructure that provides access to network communication services and resources for end users and devices spread over a single floor or building. You create a campus network by interconnecting a group of LANs that are spread over a local geographic area. Campus network design concepts include small networks that use a single LAN switch, up to very large networks with thousands of connections. Source: https://www.cisco.com/c/en/us/td/docs/solutions/CVD/Campus/cisco-campus-lan-wlan\ufffedesign-guide.html Justification#2 Source: Huawei Lecture # 22, Slide # 7"
  },
  {
    "id": 307,
    "question": "Which statements are correct about the shortcut keys of the VRP operating platform? (Multiple choice)",
    "options": {
      "A": "TAB prompts the most recently entered command",
      "B": "CTRL+C to stop the current command",
      "C": "The left cursor key (<) moves the cursor to the left position.",
      "D": "CTRL+Z back to user view"
    },
    "correct": [
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 Table 2-2 System-defined shortcut keys Key Function Ctrl+C Stops performing current functions. Ctrl+Z Returns to the user view Ctrl+B Moves the cursor back one character. Source: B, C & D) https://support.huawei.com/enterprise/en/doc/EDOC1000178166/36ae01a3/using\ufffecommand-line-shortcut-keys Justification#2 C) Source: Huawei Lecture # 3 Slide # 22, 27"
  },
  {
    "id": 308,
    "question": "Which of the following information prompts will the VRP operating platform use for incomplete input commands?",
    "options": {
      "A": "Error: Ambiguous command found at' position",
      "B": "Error: Incomplete command found at' position",
      "C": "Error: Too many parameters found at' position",
      "D": "Error: Wrong parameter found at 'position"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 Table 2-3 Common error messages of the command line Error Message Cause of the Error Error: Incomplete command found at '^' position. The entered command is incomplete. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100096311/941a7a88/interpreting\ufffecommand-line-error-messages Justification#2 Source: Huawei Lecture # 3, Slide # 25 Explanation: \u2022 Scenario: Entering a command without required parameters (e.g., sysname without specifying a name). \u2022 Error B: Indicates the command is missing necessary input at the marked position."
  },
  {
    "id": 309,
    "question": "As shown in the figure below, which port of the following switches will be blocked?",
    "options": {
      "A": "SWC G0/0/1",
      "B": "SWC G0/0/2",
      "C": "SWB G0/0/3",
      "D": "SWA G0/0/3"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 7, Slide # 22 Explanation:"
  },
  {
    "id": 310,
    "question": "An existing switch is connected to a designated port through a port, but the port does not forward any packets, and can monitor network changes by receiving BPDUs. then what is the role of the port?",
    "options": {
      "A": "Designated port",
      "B": "Alternate port",
      "C": "Disable port",
      "D": "Root port"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 An alternate port receives BPDUs from another switch but remains in a blocked state. For example, let\u2019s say a switch has two paths to the root bridge. It will elect one of the two ports as a root port and the other will become an alternate port. Source: https://documentation.meraki.com/MS/Port_and_VLAN_Configuration/Spanning_Tree_Prot ocol_(STP)_Overview#:~:text=An%20alternate%20port%20receives%20BPDUs,will%20be come%20an%20alternate%20port Justification#2 Source: Huawei Lecture # 9, Slide # 49"
  },
  {
    "id": 311,
    "question": "In the network shown in the figure, which of the following descriptions is correct?",
    "options": {
      "A": "The network between RTA and SWC is the same conflict domain",
      "B": "The network between SWA and SWC is the same conflict domain",
      "C": "The network between SWA and SWB is the same broadcast domain",
      "D": "The network between SWA and SWC is the same broadcast domain"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Explanation: \u2022 Because of the SWA and SEC are connected to the hub that\u2019s why both belong to the same conflict domain. \u2022 Conflict Domain: A hub (HUB) does not segment collision domains, so devices connected through a hub share the same collision domain. \u2022 SWA \u2194 HUB \u2194 SWC: Since SWA and SWC are connected via a hub (HUB), they are in the same collision domain."
  },
  {
    "id": 312,
    "question": "The output information of a switch is shown in the figure. Which of the following statements is correct? (Multiple choice)",
    "options": {
      "A": "The GE0/0/2 port of the switch carries VLAN TAG when sending VLAN20 data frames",
      "B": "The user manually created 4 VLANs",
      "C": "The GE0/0/1 port of the switch does not carry VLAN TAG when sending VLAN20 data frames",
      "D": "The GE0/0/1 port of the switch does not carry VLAN TAG when sending VLAN10 data frames"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification In an untagged vlan interface, the vlan id would be stripped while sending the data frame hence data packets sent from the interface 01 02 would not carry vlan tag \u2022 For option B, the user manually created 4 VLANs (B). VLANs 10, 20, 30, and 40 are all listed as \"common\" which means they were manually created by the user. \u2022 In option D, this is because under the \"VID\" (VLAN ID) column, \"10\" has \"UT\" (untagged) under the \"Ports\" column with G 0/0/1"
  },
  {
    "id": 313,
    "question": "As shown in the figure, if host A has the ARP cache of host B, host A can ping host",
    "options": {
      "B": "False",
      "A": "True"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification HOSTA searches the local ARP table for the ARP entry corresponding to HOSTB. If the corresponding ARP entry is found, HOSTA encapsulates the IP packets into Ethernet frames and forwards them to HOSTB based on its MAC address. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100169990/f5ddba7b/understanding\ufffearp Explanation: \u2022 By default, VLANs isolate broadcast traffic, so ARP requests from Host A (VLAN 20) will not reach Host B (VLAN 10), and vice versa. This means Host A cannot dynamically learn Host B's MAC address via ARP. \u2022 Even if Host A has Host B's MAC address statically configured in its ARP cache, the switch will not forward traffic between VLANs without a router or Layer 3 device to route between the VLANs. Since there is no indication of inter-VLAN routing (e.g., a router or Layer 3 switch), Host A cannot ping Host B, even with Host B's MAC in its ARP cache. The switch will drop the traffic due to VLAN segregation."
  },
  {
    "id": 314,
    "question": "By default, what is the STP Forward Delay time in seconds?",
    "options": {
      "A": "5",
      "B": "10",
      "C": "15",
      "D": "20"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification#1 By default, the Forward Delay timer is 1500 centiseconds (15 seconds). Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178168/4dfa81e4/setting-the-stp\ufffetimers Justification#2 Huawei Slides: Lecture 9 Slide 21"
  },
  {
    "id": 315,
    "question": "The G0/0/1 interface configuration information of router A is shown in the figure. Which of the following statements is correct? (Multiple choice)",
    "options": {
      "A": "This interface will not forward received FTP packets",
      "B": "This interface will not forward ICMP packets",
      "C": "This interface will not forward received SNMP packets",
      "D": "This interface can establish OSPF neighbor relationships with other routers"
    },
    "correct": [
      "A",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Lecture # 12 Slide # 28 Source: Huawei Website (https://support.huawei.com/enterprise/en/doc/EDOC1100086647 ) Explanation \u2022 Rule 5 denies protocol 17 (UDP). \u2022 Rule 10 denies protocol 89 (OSPF). \u2022 Rule 15 denies protocol 6 (TCP). A. This interface will not forward received FTP packets: FTP uses TCP (protocol 6). Since TCP packets are denied by rule 15, this statement is correct. B. This interface will not forward ICMP packets: ICMP uses protocol 1. There is no rule denying ICMP packets in the ACL, so this statement is incorrect. C. This interface will not forward received SNMP packets: SNMP uses UDP (protocol 17). Since UDP packets are denied by rule 5, this statement is correct. D. This interface can establish OSPF neighbour relationships with other routers: OSPF uses protocol"
  },
  {
    "id": 316,
    "question": "To apply the ACL configured in the figure in Telnet, which of the following statements is correct?",
    "options": {
      "A": "The device with IP address 172.16.105.4 can use Telnet service",
      "B": "The device with IP address 172.16.105.3 can use Telnet service",
      "C": "The device with IP address 172.16.105.5 can use Telnet service",
      "D": "The device with IP address 172.16.105.6 can use Telnet service"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Because we use ACL rule to not use Telnet service in IP addresses 176.16.105.3 & 176.16.105.4 & 176.16.105.5, deny means to stop. Only the option D is correct because we cannot apply any rule on this IP address. These rules are applied in order, and if a rule matches, no further rules are evaluated. Here\u2019s the evaluation of each option: \u2022 Option A: The device with IP address 172.16.105.4 can use Telnet service \u25aa This device is denied by rule 10. \u2022 Option B: The device with IP address 172.16.105.3 can use Telnet service \u25aa This device is denied by rule 5. \u2022 Option C: The device with IP address 172.16.105.5 can use Telnet service \u25aa This device is denied by rule 15. \u2022 Option D: The device with IP address 172.16.105.6 can use Telnet service \u25aa This device is not explicitly denied by any of the deny rules and thus is permitted by rule 20. Therefore, the correct answer is: The device with IP address 172.16.105.6 can use Telnet service."
  },
  {
    "id": 317,
    "question": "Which of the following fields is not included in the HELLO packet of the OSPF protocol?",
    "options": {
      "A": "Neighbor",
      "B": "Network Mask",
      "C": "HelloInterval",
      "D": "Sysname"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification#1 Table 2 Hello packet fields Field Length Description Network Mask 32 bits Mask of the network on which the interface that sends the Hello packet resides. HelloInterval 16 bits Interval at which Hello packets are sent. Neighbor 32 bits Router ID of the neighbor. Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100277644/AEM10221/04/resource s/vrp/feature_0003998103.html Justification#2 Source: Huawei Lecture # 6, Slide # 18"
  },
  {
    "id": 318,
    "question": "All interfaces of the router belong to the same broadcast domain.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 Routers do not forward broadcast traffic; they break broadcast domains. Source: https://networklessons.com/switching/broadcast-domain Justification#2 Because on the router both interfaces belong to different networks so the broadcast domain is not same if two or more networks are running on the router. Source: Huawei Website: https://forum.huawei.com/enterprise/intl/en/thread/datacom-basics\ufffenetwork-deviceandtheir-functions/667246568694235136?blogId=667246568694235136"
  },
  {
    "id": 319,
    "question": "The host's IPv4 address is 200.200.200.201/30. Which of the following hosts has an IPv4 address and its communication does not need to be forwarded by a router?",
    "options": {
      "A": "200.200.200.202",
      "B": "200.200.200.200",
      "C": "200.200.200.203",
      "D": "200.200.200.1"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 4 Slide # 20 Explanation: To determine which host's communication does not need to be forwarded by a router, we need to understand the subnetting of the given network address 200.200.200.201/30. A /30 subnet has a subnet mask of 255.255.255.252, which provides 2 usable IP addresses. The addresses in this subnet range from 200.200.200.200 to 200.200.200.203. The subnet includes the following addresses:200.200.200.200 (network address) - 200.200.200.201 (host address) - 200.200.200.202 (host address) - 200.200.200.203 (broadcast address) Among these addresses, only the address 200.200.200.202 falls within the same subnet as 200.200.200.201, so communication between these two hosts does not require forwarding by a router. Therefore, the correct answer is: A. 200.200.200.202"
  },
  {
    "id": 320,
    "question": "Among the following commands to configure the default route, which one is correct?",
    "options": {
      "A": "[Huawei-Seria10] ip route-static 0.0.0.0 0.0.0.0 0.0.0.0",
      "B": "[Huawei] ip route-static 0.0.0.0 0.0.0.0 192.168.1.1",
      "C": "[Huawei] ip route-static 0.0.0.0 0.0.0.0 0.0.0.0",
      "D": "[Huawei] ip route-static 0.0.0.0 255.255.255.255 192.168.1.1"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 Set default gateway addresses of PC1, PC2, and PC3 to 192.168.1.1, 192.168.2.1, and 192.168.3.1 respectively. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100034072/14e80e16/example-for\ufffeconfiguring-ipv4-static-routes Justification#2 Source: Huawei Lecture # 5, Slide # 29 Explanation: (Option B is correct because it properly specifies the default route with the next hop IP address (192.168.1.1), allowing any traffic with a destination address not matching any other route to be forwarded to that next hop. Options A, C, and D are incorrect because they either lack the specification of the next hop IP address (A and C) or use an inappropriate subnet mask for a default route (D).)"
  },
  {
    "id": 321,
    "question": "If the network address of a network is 192.168.1.0, then its broadcast address must be 192.168.1.255.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 4, Slide # 27 Explanation: The statement \"If the network address of a network is 192.168.1.0, then its broadcast address must be 192.168.1.255\" is only true if the subnet mask is 255.255.255.0 (/24). If a different subnet mask is used, the broadcast address will be different. For different subnet: - Subnet Mask: 255.255.255.128 (/25) - Network Address: 192.168.1.0 - Broadcast Address: 192.168.1.127"
  },
  {
    "id": 322,
    "question": "On Huawei AR G3 routers, what is the -i parameter of the Ping command in VRP used to set?",
    "options": {
      "A": "The destination IP address of the Echo Reply message",
      "B": "The source IP address of the Echo Request message",
      "C": "Interface for receiving Echo Reply messages",
      "D": "Interface for sending Echo Request messages"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification#1 -i: specifies an interface for sending ICMP Echo Request packets. Source: https://forum.huawei.com/enterprise/intl/en/thread/ping-command\ufffeoptions/667235016977039360?blogId=667235016977039360 Justification#2 Huawei Slides: Lecture 4 Slide 34 On Huawei AR G3 routers running VRP (Versatile Routing Platform), the -i parameter of the Ping command is used to set the interface for sending Echo Request messages."
  },
  {
    "id": 323,
    "question": "If the Proto of a route information in the routing table is OSPF, the priority of this route must be 10.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 Parameter Description Value priority Specifies the priority of an interface that participates in the DR or BDR election. A larger value indicates a higher priority. The value is an integer ranging from 0 to 255. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100333403/15a37ba9/ospf-dr-priority Justification#2 Source: Huawei Lecture # 6, Slide # 40"
  },
  {
    "id": 324,
    "question": "In the switch MAC address table, which of the following entries will not age?",
    "options": {
      "A": "Dynamic MAC address table entry",
      "B": "Static MAC address table entry",
      "C": "Port MAC address table entry",
      "D": "Device MAC address table entry"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification A static MAC address entry will not be aged out. After being saved, a static MAC address entry will not be lost after a system restart, and can only be deleted manually. Source: https://support.huawei.com/enterprise/en/doc/EDOC1000128406/7fe5507/configuring-a\ufffemac-addresstable"
  },
  {
    "id": 325,
    "question": "What is the transmission rate of an Eth-Trunk port in manual link aggregation mode related to? (Multiple choice)",
    "options": {
      "A": "Number of member ports",
      "B": "Bandwidth of member ports",
      "C": "If an IP address is configured on the member port",
      "D": "If the member port is on the public or private network"
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification#1 The number of member links in the Up state affects the status and bandwidth of a trunk interface. The bandwidth of an Eth-Trunk interface equals the total bandwidth of all member interfaces in the Up state. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100279274/5a9f722c/eth-trunk\ufffeinterface-configuration?utm_source=chatgpt.com Justification#2 Source: Huawei Lecture # 11, Slide # 13"
  },
  {
    "id": 326,
    "question": "What is the role of the command port trunk allow pass vlan all?",
    "options": {
      "A": "If the port default vlan 3 command is configured for the connected remote device, VLAN 3 cannot communicate between the two devices",
      "B": "All VLAN data frames are allowed to pass through this port",
      "C": "The connected peer device can dynamically determine which VLAN IDs are allowed to pass",
      "D": "The opposite port connected to the port must be configured with port trunk permit VLAN all"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 To allow all packets from one or multiple VLANs to pass through a trunk interface, the trunk interface must be added to the VLANs using the port trunk allow-pass vlan command. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064351/a0f4f7e4/port-trunk-allow\ufffepass-vlan?utm_source=chatgpt.com Justification#2 Source: Huawei Lecture # 8 Slide # 23"
  },
  {
    "id": 327,
    "question": "Hybrid port can be connected to user host and other switches.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1 Hybrid ports are switch ports that connect a local switch to hosts and to other switches. Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100149308/AEJ0713J/17/resources/ admin/sec_admin_network_vlan_0002.html Justification#2 Source: Huawei Lecture # 8 Slide # 17"
  },
  {
    "id": 328,
    "question": "In which working state of the STP protocol can the port be changed to the Forwarding state without going through other states?",
    "options": {
      "A": "Blocking",
      "B": "Learning",
      "C": "Listening",
      "D": "Disabled"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 Port State Description Learning This is a transitional state. In Learning state, a loop-free MAC address forwarding table is established. The port does not forward user traffic. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100410551/e99e1364/stp-port\uffferoles-and-port-states Justification#2 Source: Huawei Lecture # 9 Slide # 33"
  },
  {
    "id": 329,
    "question": "Switches running STP protocol, the port needs to wait for the forwarding delay in the Learning state before it can be transformed into the Forwarding state.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1 The newly selected root port and designated port must wait for two Forward Delay intervals before transitioning to the Forwarding state. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100092143 Justification#2 Source: Huawei Lecture # 9 Slide # 33"
  },
  {
    "id": 330,
    "question": "In order to realize the network layer function on the VLANIF interface, what need to be configured on the VLANIF interface? (Multiple choice)",
    "options": {
      "A": "MAC address",
      "B": "Subnet mask",
      "C": "IP prefix",
      "D": "IP address"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 Run ip address ip-address { mask | mask-length } [ sub ] An IP address is assigned to the VLANIF interface for communication at the network layer. Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100277644/AEM10221/04/resource s/vrp/dc_vrp_vlan_cfg_0013.html Justification#2 Source: Huawei Lecture # 10, Slide # 14"
  },
  {
    "id": 331,
    "question": "As shown in the figure, a static NAT command is deployed on router R1. When the PC accesses the Internet, the destination address in the data packet will not change.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 14, Slide # 11 Explanation: \u2022 NAT Translation: The NAT (Network Address Translation) configured on R1 is translating the private IP address of the PC (192.168.0.2) to a public IP address (202.10.1.3). The relevant NAT command is nat static global 202.10.1.3 inside 192.168.0.2 netmask 255.255.255.255, which specifies that traffic from 192.168.0.2 will appear to come from 202.10.1.3 when going to the ISP. \u2022 Destination Address: While the source address of packets from the PC (192.168.0.2) will be translated to the global address (202.10.1.3), the destination address will remain the same as it was set by the PC when initiating the connection. The NAT process does not modify the destination address; it only changes the source address for outgoing packets and the destination address for incoming packets back to the PC."
  },
  {
    "id": 332,
    "question": "A DHCP server is deployed in the network, but the administrator found that some hosts did not correctly obtain the address specified by the DHCP server. What are the possible reasons? (Multiple choice)",
    "options": {
      "A": "The address pool of the DHCP server has all been allocated",
      "B": "Some hosts cannot communicate with the DHCP server normally, and the client systems of these hosts automatically generate addresses in the range of 169.254 0.0",
      "C": "There is another DHCP server in the network that works more efficiently",
      "D": "Some hosts cannot communicate with the DHCP server normally, and the client systems of these hosts automatically generate addresses in the range of 127.254.0.0"
    },
    "correct": [
      "A",
      "B",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification \u2022 A: Address pool exhaustion is a documented cause (\"IP addresses in the pool have been used up\"). \u2022 B: Confirmed\u2014hosts generate 169.254.x.x (APIPA) if DHCP fails (\"client auto-configures an address in 169.254.0.0/16\"). \u2022 C: Competing DHCP servers are flagged as a conflict source (\"another server responds faster\"). \u2022 D: Invalid\u2014Huawei does not mention 127.254.0.0 (APIPA uses 169.254.0.0/16). Source: https://support.huawei.com/enterprise/en/doc/EDOC1100034071/e0653f04/a-client-fails-to\ufffeobtain-an-ip-address"
  },
  {
    "id": 333,
    "question": "On the AC, you can manually specify the source address or source interface of the CAPWAP tunnel.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1"
  },
  {
    "id": 334,
    "question": "AC uses CAPWAP control tunnel to transmit management messages to the FIT AP.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1 The AC sends management packets over the control tunnel to manage APs in a centralized manner. Data packets of users are all forwarded to the AC for centralized processing through the data tunnel. To improve link reliability and prevent CAPWAP control tunnels from being terminated when the service traffic volume is high, configure a high priority for CAPWAP management packets. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100212081/f9d80d43/configuring\ufffecapwap-tunnel-parameters Justification#2 Source: Huawei Lecture # 16 Slide # 16 (notes section)"
  },
  {
    "id": 335,
    "question": "What is the coverage area of an AP in WLAN?",
    "options": {
      "A": "BSS",
      "B": "SSID",
      "C": "BSSID",
      "D": "ESS"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1 - Basic service set (BSS): an area covered by an AP. STAs in a BSS can communicate with each other. Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100331202/FEM1012J/08/resources /en-us_concept_0000001172291501.html Justification#2 Source: Huawei Lecture # 16, Slide # 22"
  },
  {
    "id": 336,
    "question": "FIT AP can work independently without relying on AC.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 Fat APs can implement such functions independently, whereas Fit APs must interwork with the WLAN Access Controller (AC). Source: https://e.huawei.com/ph/blogs/enterprise-networking/wifi6/201903011058 Justification#2 Source: Huawei Lecture # 16 Slide # 11 (notes section)"
  },
  {
    "id": 337,
    "question": "In the CAPWAP tunnel establishment phase, after the AC receives the Join Request message sent by the AP, the AC will check the validity of the AP. Which of the following is the authentication method supported by the AC? (Multiple choice)",
    "options": {
      "A": "SN certification",
      "B": "Password authentication",
      "C": "MAC authentication",
      "D": "Not certified"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 AP authentication includes non-authentication, MAC address authentication, and SN authentication Source: https://info.support.huawei.com/network/ptmngsys/Web/tsrev_wlan/en/content/wlan/11_edes k_ap_online_fail/edesk_ap_online_fail_edesk004.html Justification#2 Source: Huawei Lecture # 16 Slide # 34 Notes: \"Non-authentication\" (or \"not certified\") is a valid operational mode where no validation is performed, it is not considered an authentication method\u2014it simply bypasses security checks. The question specifically asks for supported authentication methods, so only A (SN) and C (MAC) qualify."
  },
  {
    "id": 338,
    "question": "Which of the following statements about the S field in the MPLS packet header are correct? (Multiple choice)",
    "options": {
      "A": "s bit has only 1 bit in frame mode and 2 bit in cell mode",
      "B": "s bit exists in every MPLS packet header",
      "C": "It is used to mark whether there are other labels behind this label, 1 means yes, 0 means no",
      "D": "It is used to mark whether there are other labels behind this label, 0 means yes, 1 means no"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100118961 Explanation: \u2022 The S-bit (1 bit) is present in every MPLS label header. \u2022 S=1 indicates the bottom of the stack (no more labels); S=0 means additional labels follow. \u2022 Option A falsely claims the S-bit size varies (e.g., 2 bits in cell mode), it is always 1 bit. \u2022 Option D inverts the standard logic (S=1 = last label). Huawei\u2019s text strictly adheres to RFC 3032\u2019s definition."
  },
  {
    "id": 339,
    "question": "The network management workstation manages network equipment through the SNMP protocol. When an abnormality occurs in the managed device, what kind of SHMP message will the network management workstation receive?",
    "options": {
      "A": "trap message",
      "B": "get-response message",
      "C": "set-request message",
      "D": "get-request message"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1 Unsolicited (asynchronous) notifications can be generated as traps or inform requests. Traps are messages alerting the SNMP manager to a condition on the network. Source: https://learningnetwork.cisco.com/s/article/Understanding-Simple-Network-Management\ufffeProtocol--SNMP?utm_source=chatgpt.com Justification#2 Source: Huawei Lecture # 18, Slide # 15"
  },
  {
    "id": 340,
    "question": "What type of IPv6 address FE80: 2E0: FCFF: FE6F: 4F36 belongs to?",
    "options": {
      "A": "Multicast address",
      "B": "Link local address",
      "C": "Global semicast address",
      "D": "Anycast address"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 A Link-Local address is an IPv6 unicast address that can be automatically configured on any interface that uses the Link-Local prefix FE80::/10 (1111 1110 10) Source: https://www.cisco.com/c/en/us/support/docs/ip/ip-version-6-ipv6/113328-ipv6- lla.html?utm_source=chatgpt.com Justification#2 Source: Huawei Lecture # 19, Slide # 15"
  },
  {
    "id": 341,
    "question": "The origin of SDN is the separation of transfer and control. The separation of transfer and control is a way to realize SDN, not the essence.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 20 Slide # 18"
  },
  {
    "id": 342,
    "question": "Which of the following IEEE802.11 standards only supports 2.4GHz frequency band for communication?",
    "options": {
      "A": "802.11a",
      "B": "802.11g",
      "C": "802.11ax",
      "D": "802.11n"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000113315/bd9557ad/80211- protocols"
  },
  {
    "id": 343,
    "question": "Through SR (Segment Routing), an explicit path can be easily defined. The nodes in the network only need to maintain the SegmentRouting information to cope with the real-time rapid development of the business. What are the following characteristics of Segment Routing? (Multiple choice)",
    "options": {
      "A": "By extending the existing protocol (e.g, IGP), the existing network can better and smoothly evolve",
      "B": "SR (Segment Routing) adopts IP forwarding, and no additional maintenance is required for another label forwarding table",
      "C": "Adopting source routing technology to provide the ability to quickly exchange text between the network and upper-layer applications",
      "D": "Support the centralized control mode of the controller and the distributed control mode of the transponder at the same time, and provide a balance between centralized control and distributed control"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification \u2022 Existing protocols are extended, enabling the network to smoothly evolve. \u2022 The ingress controls and adjusts service paths through the source routing technology, enabling the network to quickly respond to the requirements of upper-layer applications. \u2022 Balancing centralized control and distributed control/forwarding prevents controller performance from becoming a service bottleneck. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100092117"
  },
  {
    "id": 344,
    "question": "The MPLS label header is encapsulated between the data link layer header and the network layer header of the message.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification For MPLS to work, a label needs to be added to the packet. The label is added as a shim header between the Layer 2 Frame Header and the Layer 3 Packet Header. Source: https://community.cisco.com/t5/networking-knowledge-base/understanding-multi-protocol\ufffelabel-switching-mpls/ta-p/5053726"
  },
  {
    "id": 345,
    "question": "If the MAC address of an interface is 0OEO-FCEF-OFEC, what is its corresponding EUI-64 address?",
    "options": {
      "A": "00EO-FCEF-FFFE-OFEC",
      "B": "02EO-FCFF-FEEF-0FEC",
      "C": "00EO-FCFF-FEEF-0FEC",
      "D": "02EO-FCEF-FFFE-0FEC"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 19, Slide # 17"
  },
  {
    "id": 346,
    "question": "Which of the following descriptions of static and dynamic routing is wrong?",
    "options": {
      "A": "Dynamic routing protocols take up more system resources than static routing protocols.",
      "B": "After the link fails, the static route can automatically complete the network convergence.",
      "C": "After the administrator deploys the dynamic routing protocol in the corporate network, later maintenance and expansion can be more convenient",
      "D": "Static routing is simple to configure and easy to manage when applied in the enterprise"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 The disadvantage of static routes is that they cannot automatically adapt to network topology changes. Therefore, static routes require subsequent maintenance. Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100149308/AEJ0713J/18/resources/ admin/sec_admin_router_basic_0003.html Justification#2 Source: Huawei Lecture # 5, Slide # 34"
  },
  {
    "id": 347,
    "question": "Which of the following descriptions of OSPF areas are correct? (Multiple choice)",
    "options": {
      "A": "All networks should be declared in zone 0",
      "B": "The number of the backbone area cannot be 2",
      "C": "Before configuring the OSPF area, an IP address must be configured for the loopback interface of the router",
      "D": "The number range of the area is from 0.0.0.0 to 255.255.255.255"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 B) The backbone area (Area 0) is the core of an OSPF network D) Entering an area ID of 0 or 0.0.0.0 automatically joins the routing switch to the backbone area. The maximum area ID value is 255.255.255.254 (4,294,967,294.) Source: B) https://docs.paloaltonetworks.com/pan-os/11-1/pan-os-networking-admin/ospf/ospf\ufffeconcepts/ospf-areas D) https://arubanetworking.hpe.com/techdocs/AOS-S/16.11/MRG/KB/content/kb/cnf-osp\ufffebac-nor-are.htm Justification#2 Source: Huawei Lecture # 6 Slide # 35 (notes section), 39"
  },
  {
    "id": 348,
    "question": "The Layer 2 Ethernet switch generates entries in the MAC address table according to the ( ) of the Ethernet frame received by the port.",
    "options": {
      "A": "Source IP address",
      "B": "Source MAC address",
      "C": "Destination MAC address",
      "D": "Destination IP address"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification#1 When receiving a data frame, the switch records the source MAC address of the data frame and the interface that receives the data frame in a MAC address entry. Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178168/e48192c/disabling-mac\ufffeaddress-learning Justification#2 Source: Huawei Lecture # 7 Slide # 31"
  },
  {
    "id": 349,
    "question": "The MAC address table of existing switches is shown in the figure. Which of the following statement is correct?",
    "options": {
      "A": "The MAC address 5489-9885-18a8 is manually configured by the administrator.",
      "B": "The MAC address 5489-9811-0b49 is manually configured by the administrator.",
      "C": "The MAC address 5489-989d-1d30 is manually configured by the administrator.",
      "D": "After the switch restarts, all MAC addresses need to be relearned."
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification This is because 5489-9811-0b4 has \"static\" listed under the \"Type\" column. The other MAC addresses in the table, 5489-9894-1430-1 and 5489-9885-1888, have \"dynamic\" listed under the \"Type\" column, which means they were learned dynamically by the switch. Source: https://support.huawei.com/enterprise/en/doc/EDOC1000141870/f355890a/example\ufffefor-configuringstatic-mac-address-entries"
  },
  {
    "id": 350,
    "question": "When the switch port sends a data frame carrying the same VLAN TAG and PVID, it must strip the VLAN TAG and forward it.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification#1 An access interface directly removes VLAN tags from frames before sending the frames. Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178168/f9b8a34a/adding-and\uffferemoving-vlan-tags Justification#2 Source: Huawei Lecture # 8 Slide # 18"
  },
  {
    "id": 351,
    "question": "Which of the following levels is not a common network level in a mid-sized campus network architecture?",
    "options": {
      "A": "Access layer",
      "B": "Core layer",
      "C": "Convergence layer",
      "D": "Network layer"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification#1 A medium-sized campus network can use a three-layer intranet networking architecture that consists of the core layer, aggregation layer, and access layer. Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100331202/FEM1012J/08/resources /en-us_topic_0000001489814749.html Justification#2 Source: Huawei Lecture # 22 Slide # 8"
  },
  {
    "id": 352,
    "question": "UDP cannot guarantee the reliability of data transmission, and does not provide the functions of message sequencing and flow control. It is suitable for flows with low transmission reliability requirements but high transmission speed and delay requirements.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Advantages of UDP: Speed: UDP is faster than TCP because it does not have the overhead of establishing a connection and ensuring reliable data delivery. Disadvantages of UDP: No reliability: UDP does not guarantee delivery of packets or order of delivery, which can lead to missing or duplicate data. Source: Geeksforgeeks website: https://www.geeksforgeeks.org/user-datagram-protocol-udp/"
  },
  {
    "id": 353,
    "question": "Which stage of the life cycle of campus network construction is the beginning of a project?",
    "options": {
      "A": "Network optimization",
      "B": "Network implementation",
      "C": "Planning and design",
      "D": "Network operation and maintenance"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 22 Slide # 13 Source: https://forum.huawei.com/enterprise/intl/en/thread/campus-network-building-cases-and\ufffepractices/667246826295803905?blogId=667246826295803905"
  },
  {
    "id": 354,
    "question": "When the router is powered on, it will read the configuration file from the default storage path to initialize the router. If there is no configuration file in the default storage path, what will the router use for initialization?",
    "options": {
      "A": "Initial configuration",
      "B": "Current configuration",
      "C": "New configuration",
      "D": "Default parameters"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification When a device is powered on, it reads the preset default configuration file from the default storage path to initialize the system. The configurations in this configuration file are called preset configurations. If no preset default configuration file exists in the default storage path, the device uses the factory configurations for initialization. Source: Huawei Website https://support.huawei.com/enterprise/en/doc/EDOC1100335705/c80a8cf/configuration\ufffefilemanagement-configuration"
  },
  {
    "id": 355,
    "question": "In the OSPF protocol, which of the following descriptions of DR is correct? (Multiple choice)",
    "options": {
      "A": "If the priority values of the two routers are equal, the router with the larger Router ID is selected as the DR",
      "B": "By default, all routers in this broadcast network will participate in the DR election",
      "C": "If the priority values of the two routers are different, select the router with the lower priority as the DR",
      "D": "DR and BDR should also establish an adjacency relationship"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification#1 A. During DR/BDR election, if two routers use the same DR priority, they need to compare their router IDs, and the router with a larger router ID will become the DR or BDR. B. A priority of zero removes a router from the election. D. and an adjacency relationship is established between the DR and the BDR. Source: A. https://support.huawei.com/enterprise/en/doc/EDOC1100301642/32a400ec/ospf\ufffefundamentals B. https://community.cisco.com/t5/switching/dr-and-bdr-in-ospf/td-p/2716502 D. https://forum.huawei.com/enterprise/intl/en/thread/application-scenarios-for-routing\ufffepolicies-1/667223541210300416?blogId=667223541210300416 Justification#2 Only the DR and BDR can establish adjacencies with other OSPF routers; the others don\u2019t do this, and they are in the 2-way state. Source: Huawei Lecture # 6 Slide # 32, 33 (notes section)"
  },
  {
    "id": 356,
    "question": "Which of the following fields is not included in the HELLO packet of the OSPF protocol?",
    "options": {
      "A": "Neighbor",
      "B": "Network Mask",
      "C": "HelloInterval",
      "D": "Sysname"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification#1 Table 2 Hello packet fields Field Length Description Network Mask 32 bits Mask of the network on which the interface that sends the Hello packet resides. HelloInterval 16 bits Interval at which Hello packets are sent. Neighbor 32 bits Router ID of the neighbor. Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100277644/AEM10221/04/resource s/vrp/feature_0003998103.html Justification#2 Source: Huawei Lecture # 6 Slide # 18"
  },
  {
    "id": 357,
    "question": "If the network address of a network is 10.1.1.0/30, what is its broadcast address?",
    "options": {
      "A": "10.1.1.2",
      "B": "10.1.1.3",
      "C": "10.1.1.4",
      "D": "10.1.1.1"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 4 Slide # 20 Explanation: The subnet mask /30 corresponds to a subnet mask of 255.255.255.252 in dotted decimal notation. This means: - The network address is 10.1.1.0 - The subnet allows for 4 IP addresses in total (2^(32-30) = 4), but 2 of them are reserved for network and broadcast addresses. In a /30 subnet: - 10.1.1.0: Network address - 10.1.1.3: Broadcast address"
  },
  {
    "id": 358,
    "question": "If the broadcast address of a network is 172.16.1.255, what might its network address be?",
    "options": {
      "A": "172.16.2.0",
      "B": "172.16.1.128",
      "C": "172.16.1.1",
      "D": "172.16.1.253"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Lecture # 4 Slide # 20 Explanation: If the broadcast address is 172.16.1.255, the subnet is likely /25 (255.255.255.128). In this case, the network range is 172.16.1.128 \u2013 172.16.1.255, making the network address 172.16.1.128."
  },
  {
    "id": 359,
    "question": "When the IPv4 protocol is used as the network layer protocol, which field is not included in the network layer header?",
    "options": {
      "A": "Source IPv4 address",
      "B": "Sequence number",
      "C": "Destination IPv4 address",
      "D": "TTL"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100334399/114a4ceb/i%20pv4- basic- configuration Table 2-4 Meaning of each field in an IPv4 datagram Field Length Meaning Version 4 bits IP version, which can be IPv4 or IPv6. Header Length 4 bits Length of the IPv4 header. Type of Service 8 bits This field takes effect only in the differentiated service model. Total Length 16 bits Total length of the header and data. Identification 16 bits A device maintains a counter on a storage device to record the number of IPv4 datagrams. The counter value increases by 1 each time an IPv4 datagram is sent. Flags 3 bits This field has three bits. The most significant bit is reserved and must be set to 0. If the middle bit is 0, the datagram can be fragmented. If the middle bit is 1, the datagram cannot be fragmented. If the least significant bit is 0, the fragment is the last one. If the least significant bit is 1, there are more fragments. Fragment Offset 13 bits Location of a fragment in a datagram. TTL 8 bits Life span of a datagram on a network. TTL is measured by the number of hops. Protocol 8 bits Type of the protocol carried in a datagram. Header Checksum 16 bits A device calculates the header checksum for each datagram received. If the checksum is 0, the device knows that the header remains unchanged and retains the datagram. This field checks only the header but not the data. Source IP Address 32 bits IPv4 address of a sender. Destination IP Address 32 bits IPv4 address of a receiver. Options 0 to 40 bytes This field supports various options, such as error correction, measurement, and security. Pad bytes with a value of 0 are added if necessary. Data Variable Pads an IP datagram. Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100334321/AEM1020X/05/resources/dc/dc_ fd_IPv4_0006.html"
  },
  {
    "id": 360,
    "question": "When the router forwards a data packet, if it does not match the corresponding detailed route and there is no default route, it will directly discard the data packet.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086956 Default Routes Default routes are special routes used only when packets to be forwarded do not match any routing entry in a routing table. If the destination address of a packet does not match any entry in the routing table, the packet is sent through a default route. If no default route exists and the destination address of the packet does not match any entry in the routing table, the packet is discarded. An Internet Control Message Protocol (ICMP) packet is then sent, informing the originating host that the destination host or network is unreachable. In a routing table, a default route is the route to network 0.0.0.0 (with the mask 0.0.0.0). You can run the display ip routing-table command to check whether a default route is configured. Generally, administrators can manually configure default static routes. Default routes can also be generated through dynamic routing protocols such as OSPF and IS-IS."
  },
  {
    "id": 361,
    "question": "What kind of message does the OSPF protocol use to send LSA to neighbors?",
    "options": {
      "A": "LSU",
      "B": "LSACK",
      "C": "LSR",
      "D": "LSA"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 06, Page # 18 Packet Name Function Hello Is periodically sent to discover and maintain OSPF neighbor relationships. Database Description Describes the summary of the local LSDB, which is used to synchronize the LSDBs of two devices. Link State Request Requests a needed LSA from a neighbor. LSRs are sent only after DD packets have been successfully exchanged. Link State Update Is sent to advertise a requested LSA to a neighbor. Link State ACK Is used to acknowledge the receipt of an LSA."
  },
  {
    "id": 362,
    "question": "Apply the ACL configured as shown in the figure in Telnet. Only the device with the IP address of 172.16.105.2 is allowed to log in remotely:",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 12, Page # 13 Here, the Wildcard is 0, and the IP to permit is 172.16.105.2. So true Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086647 \u25aa Example 3: Apply an ACL to Telnet, to allow only the administrator's host (172.16.105.2) to Telnet to the device and reject other users. The default ACL action of the Telnet module is deny, and a few packets are permitted and most packets are denied. Therefore, you only need to configure rule permit xxx. # acl number 2000 rule 5 permit source 172.16.105.2 0 # Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178177/d8968298/configuring-a\ufffebasic-acl Configuring rules for a basic ACL \u2022 Configuring a packet filtering rule based on the source IP address (host address) To allow the packets from a host to pass, add a rule to an ACL. For example, to allow packets from host 192.168.1.3 to pass, create the following rule in ACL 2001. <HUAWEI> system-view [HUAWEI] acl 2001 [HUAWEI-acl-basic-2001] rule permit source 192.168.1.3 0"
  },
  {
    "id": 363,
    "question": "Regarding the corresponding relationship between the access control list number and type, which of the following descriptions is correct?",
    "options": {
      "A": "The basic access control list number range is 1000-2999",
      "B": "The access control list number range of the second layer is 4000-4999",
      "C": "The number range of interface-based access control list is 1000-2000",
      "D": "The range of advanced access control list numbers is 3000-4000"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 12, Page # 12 \u2022 ACL classification based on ACL rule definition methods Category Number Range Description Basic ACL 2000 to 2999 Defines rules based on source IPv4 addresses, fragmentation information, and effective time ranges. Advanced ACL 3000 to 3999 Defines rules based on source and destination IPv4 addresses, IPv4 protocol types, ICMP types, TCP source/destination port numbers, UDP source/destination port numbers, and effective time ranges. Layer 2 ACL 4000 to 4999 Defines rules based on information in Ethernet frame headers of packets, such as source and destination MAC addresses and Layer 2 protocol types. User-defined ACL 5000 to 5999 Defines rules based on packet headers, offsets, character string masks, and user-defined character strings. User ACL 6000 to 6999 Defines rules based on source IPv4 addresses or user control list (UCL) groups, destination IPv4 addresses or destination UCL groups, IPv4 protocol types, ICMP types, TCP source/destination port numbers, and UDP source/destination port numbers."
  },
  {
    "id": 364,
    "question": "What is the number range of the Layer 2 ACL?",
    "options": {
      "A": "2000 \u23af 2999",
      "B": "0 \u23af 3999",
      "C": "4000 \u23af 4999",
      "D": "6000 \u23af 6031"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 12, Page # 12 \u2022 ACL classification based on ACL rule definition methods Category Number Range Description Basic ACL 2000 to 2999 Defines rules based on source IPv4 addresses, fragmentation information, and effective time ranges. Advanced ACL 3000 to 3999 Defines rules based on source and destination IPv4 addresses, IPv4 protocol types, ICMP types, TCP source/destination port numbers, UDP source/destination port numbers, and effective time ranges. Layer 2 ACL 4000 to 4999 Defines rules based on information in Ethernet frame headers of packets, such as source and destination MAC addresses and Layer 2 protocol types. User-defined ACL 5000 to 5999 Defines rules based on packet headers, offsets, character string masks, and user-defined character strings. User ACL 6000 to 6999 Defines rules based on source IPv4 addresses or user control list (UCL) groups, destination IPv4 addresses or destination UCL groups, IPv4 protocol types, ICMP types, TCP source/destination port numbers, and UDP source/destination port numbers."
  },
  {
    "id": 365,
    "question": "What is the destination IP address of the DHCP DISCOVER message?",
    "options": {
      "A": "127.0.0.1",
      "B": "224.0.0.1",
      "C": "224.0.0.2",
      "D": "255.255.255.255"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 15, Page # 28 Source: https://info.support.huawei.com/info-finder/encyclopedia/en/DHCP.html Stage 1: Discovery stage The newly connected DHCP client does not know the IP address of the DHCP server. To learn the IP address of the DHCP server, the DHCP client broadcasts a DHCPDISCOVER message with the destination IP address of 255.255.255.255 to all devices on the same network segment. Information carried in a DHCPDISCOVER message includes the client's MAC address (chaddr field), parameter request list (Option 55), and broadcast flag (flags field)."
  },
  {
    "id": 366,
    "question": "In the history of WLAN development, which of the following is not included in the main wireless protocol standards in the primary mobile office era?",
    "options": {
      "A": "802.11g",
      "B": "802.11a",
      "C": "802.11b",
      "D": "802.11ac"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://www.ciscopress.com/articles/article.asp?p=2999384&seqNum=3 IEEE WLAN Standard Radio Frequency Description 802.11 2.4 GHz Speeds of up to 2 Mbps 802.11a 5 GHz Speeds of up to 54 Mbps Small coverage area Less effective at penetrating building structures Not interoperable with 802.11b and 802.11g 802.11b 2.4 GHz Speeds of up to 11 Mbps Longer range than 802.11a Better able to penetrate building structures 802.11g 2.4 GHz Speeds of up to 54 Mbps Backward compatible with 802.11b with reduced bandwidth capacity 802.11n 2.4 GHz 5 GHz Data rates ranging from 150 Mbps to 600 Mbps with a distance range of up to 70 m (230 feet) APs and wireless clients require multiple antennas using MIMO technology Backward compatible with 802.11a/b/g devices with limiting data rates 802.11ac 5 GHz Provides data rates ranging from 450 Mbps to 1.3 Gbps (1300 Mbps) using MIMO technology Up to eight antennas can be supported Backward compatible with 802.11a/n devices with limiting data rates 802.11ax 2.4 GHz 5 GHz Released in 2019 (latest standard) Also known as High-Efficiency Wireless (HEW) Higher data rates and increased capacity Handles many connected devices Improved power efficiency 1 GHz and 7 GHz capable when those frequencies become available Source: https://standards.ieee.org/wp-content/uploads/interactive/web/wi-fi\ufffetimeline/index.html"
  },
  {
    "id": 367,
    "question": "The router running the OSPF protocol can reach the FULL state after completing the LSDB synchronization.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 06, Page # 2 Source: https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13685- 13.html Full In this state, routers are fully adjacent with each other. All the router and network LSAs are exchanged, and the routers' databases are fully synchronized. Full is the normal state for an OSPF router. If a router is stuck in another state, it is an indication that there are problems when the adjacencies are formed. The only exception to this is the 2-way state, which is normal in a broadcast network. Routers achieve the FULL state with their DR and BDR in NBMA/broadcast media and the FULL state with every neighbor in the residual media, such as point-to-point and point-to-multipoint. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100301642/32a400ec/ospf\ufffefundamentals The OSPF neighbor state machine has the following states: \u2022 Full: This state occurs when two neighbors complete their LSDB synchronization and establish an adjacency."
  },
  {
    "id": 368,
    "question": "In order to distinguish different users and provide different network services on the AP. Which of the following can be configured?",
    "options": {
      "A": "VT",
      "B": "VAP",
      "C": "VAC",
      "D": "WAP"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 16, Page # 23 \u2022 VAP: \u25ab A physical AP can be virtualized into multiple VAPs, each of which provides the same functions as the physical AP. \u25ab Each VAP corresponds to one BSS. In this way, one AP may provide multiple BSSs that can have different SSIDs specified. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100034241/2cc5a91d/configuri Procedure When a WLAN is available for a user and the user starts to connect to the WLAN, the user actually connects to a virtual access point (VAP). A VAP is a functional entity on an AP. You can create different VAPs on an AP to provide wireless access services for different users so that these users can obtain different network resources. A VAP is also a binding between an AP radio and a service set. A VAP is generated when a service set is bound to an AP radio. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100034241/2cc5a91d/configuri Configuring a VAP Context A VAP is a functional entity on an AP. You can create a VAP on a radio by binding a service set to the radio. When a VAP is delivered to an AP, the service set parameters in the VAP are delivered to the AP. The AP then provides services for users based on the service set parameters."
  },
  {
    "id": 369,
    "question": "Network equipment running the SNMP protocol can take the initiative to report alarm information so that the network administrator can discover the fault in time.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 18, Page # 12 \u25aa The NMS and managed devices exchange messages in the following modes: \u2022 The NMS sends a request for modifying or querying configuration information to a managed device through SNMP. The agent process running on the managed device responds to the request from the NMS. \u2022 The managed device can proactively report traps to the NMS so that the network administrator can detect faults in a timely manner. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086963 SNMP Traps SNMP traps are notification messages sent by an SNMP agent to inform the NMS of alarms or events generated by the device. In this way, the administrator can learn the running status of the device in a timely manner. There are two types of SNMP traps: trap and inform. SNMPv1 does not support inform. The difference between trap and inform is that, after an SNMP agent sends an alarm or event to the NMS through an InformRequest message, the NMS needs to reply with an InformResponse message, as shown in Figure 1-14. Figure 1-14 SNMP trap operation"
  },
  {
    "id": 370,
    "question": "The IPv6 protocol uses NS and NA packets for duplicate address detection (DAD).",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 19, Page # 30 Source: Huawei Slide # 19, Page # 30"
  },
  {
    "id": 371,
    "question": "Which of the following descriptions are correct about the concept of IEV architecture? (Multiple choice)",
    "options": {
      "A": "MANO is composed of NFVO.VNFM and VIM.",
      "B": "VNFM. Virtual network function management, responsible for the life cycle management of VNF.",
      "C": "VIM (Virtualised Infrastructure Manager) virtual resource management, responsible for the virtualization of infrastructure.",
      "D": "NFVO (NFV Orchestrator) is responsible for business orchestration."
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Slide # 20, Page # 45"
  },
  {
    "id": 372,
    "question": "Which of the following methods can read data non-blocking in Python's telnetlib?",
    "options": {
      "A": "telnet_Read_all",
      "B": "telnet_read_very_lazy",
      "C": "telnet._read_eager",
      "D": "telnet_read _very_eager"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 21, Page # 24 Method Function Telnet.read_until (expected, timeout=None) Read data until a given byte string, expected, is encountered or until timeout seconds have passed. Telnet.read_all () Read all data until EOF as bytes; block until connection closed. Telnet.read_very_eager() Read everything that can be without blocking in I/O (eager). Raise EOFError if connection closed and no cooked data available. Return b'' if no cooked data available otherwise. Do not block unless in the midst of an IAC sequence. Telnet.write(buffer) Write a byte string to the socket, doubling any IAC characters. Telnet.close() Close the connection."
  },
  {
    "id": 373,
    "question": "Regarding the control plane of the device, which of the following statements is correct? (Multiple choice)",
    "options": {
      "A": "The control plane is responsible for the interaction of routing protocols between devices",
      "B": "The control plane provides equipment monitoring capabilities",
      "C": "The control plane is responsible for directing data forwarding",
      "D": "The control plane is responsible for generating the IP routing table"
    },
    "correct": [
      "A",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Slide # 21, Page # 24 (Notes section) \u2022 Control plane: provides functions such as protocol processing, service processing, route calculation, forwarding control, service scheduling, traffic statistics collection, and system security. The control plane of a switch is used to control and manage the running of all network protocols. The control plane provides various network information and forwarding query entries required for data processing and forwarding on the data plane. Source: https://www.ibm.com/think/topics/control-plane Control plane benefits Control planes have many benefits when it comes to network management. Here are some of the most common: \u2022 Efficiency: The control plane provides a single point from which every device or node on a network can be managed. For example, network administrators use the control plane to configure security settings, such as access control, and automate the delivery of critical software updates. \u2022 Adaptability: The control plane allows devices on a network to react dynamically to changes in network functionality, such as a link failure or power outage. For example, when it comes to routing data across a network, the control plane can adjust when a node fails and reroute data accordingly. \u2022 Scalability: Control planes are considered highly scalable because additional resources can be added easily without increasing the complexity of the network. Some control planes are even configured to be automatically scalable, a feature known as autoscaling. When user traffic on a network reaches a certain threshold, autoscaling triggers the provisioning of additional compute resources. \u2022 Resiliency: Control planes are highly resilient because of certain aspects of their architecture.First, they are usually kept separate from the data plane, meaning that a failure on the control plane\u2014for example, a load balancer malfunctioning\u2014won\u2019t affect the data plane. \u2022 Low latency: Control planes monitor latency and other performance metrics for connected systems and devices on a network (such as computers, mobile devices and graphics cards) so they can be kept below certain levels. In particular, CPU latency is important to monitor as it reflects the amount of time it takes data to move through a system. \u2022 Security: Control planes with additional security features\u2014known as endpoint control planes\u2014give network administrators the ability to monitor devices connected to a network, identify threats and enforce additional security policies."
  },
  {
    "id": 374,
    "question": "Which of the following commands can modify the device name to Huawei?",
    "options": {
      "A": "Hostname Huawei",
      "B": "Sysname Huawei",
      "C": "Rename Huawei",
      "D": "Do name Huawei"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 03, Page # 32"
  },
  {
    "id": 375,
    "question": "Which statement about the ARP message is wrong?",
    "options": {
      "A": "ARP reply packets are sent unicast",
      "B": "Any link layer protocol requires ARP messages to assist in obtaining data link layer identification",
      "C": "ARP packets cannot be forwarded to other broadcast domains",
      "D": "ARP request message is sent by broadcast"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 02, Page # 29 (Notes section) \u2022 The Address Resolution Protocol (ARP) is a TCP/IP protocol that discovers the data link layer address associated with a given IP address. \u2022 ARP is an indispensable protocol in IPv4. It provides the following functions: \u25aa Discovers the MAC address associated with a given IP address. \u25aa Maintains and caches the mapping between IP addresses and MAC addresses through ARP entries. \u25aa Detects duplicate IP addresses on a network segment. Explanation: Not all link-layer protocols use ARP. ARP is specifically used for resolving IP addresses to MAC addresses in IPv4 networks. Protocols such as IPv6 use the Neighbor Discovery Protocol (NDP) instead of ARP."
  },
  {
    "id": 376,
    "question": "Which of the following networks belongs to a local area network? (Multiple choice)",
    "options": {
      "A": "home network",
      "B": "Office network of a company",
      "C": "Internet",
      "D": "Broadband Metropolitan Area Network"
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://www.cisco.com/c/en/us/products/switches/what-is-a-lan-local-area\ufffenetwork.html What Is a LAN? A local area network (LAN) is a collection of devices connected together in one physical location, such as a building, office, or home. A LAN can be small or large, ranging from a home network with one user to an enterprise network with thousands of users and devices in an office or school."
  },
  {
    "id": 377,
    "question": "Which statement about the OSPF protocol DR is correct?",
    "options": {
      "A": "DR must be the highest priority device in the network",
      "B": "Router ID, the larger the value, the more preferred to be elected as DR",
      "C": "DR election is preemptive",
      "D": "An interface priority is 0; then the interface cannot be a DR"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100262536/aa8766d8/ospfpacket\ufffeformat DR priority. The default value is 1. NOTE: If the DR priority of a device interface is set to 0, the interface cannot participate in a DR or BDR election."
  },
  {
    "id": 378,
    "question": "Which of the following elements are included in the routing table? (Multiple choice)",
    "options": {
      "A": "Interface",
      "B": "Destination/mask",
      "C": "Nexthop",
      "D": "Protocol",
      "E": "Cost"
    },
    "correct": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086956#EN\ufffeUS_TOPIC_0291822184 Routing Table Contents You can run the display ip routing-table command on a router to view basic information about the routing table of the router. The command output is as follows: <HUAWEI> display ip routing-table Proto: Protocol Pre: Preference Route Flags: R - relay, D - download to fib, T - to vpn-instance, B - black hole route ------------------------------------------------------------------------------ Routing Table: _public_ Destinations : 14 Routes : 14 Destination/Mask Proto Pre Cost Flags NextHop Interface 0.0.0.0/0 Static 60 0 RD 10.137.216.1 Vlanif20 10.10.10.0/24 Direct 0 0 D 10.10.10.10 Vlanif20 10.10.10.10/32 Direct 0 0 D 127.0.0.1 InLoopBack0 10.10.10.255/32 Direct 0 0 D 127.0.0.1 InLoopBack0 10.10.11.0/24 Direct 0 0 D 10.10.11.1 LoopBack0 10.10.11.1/32 Direct 0 0 D 127.0.0.1 InLoopBack0 10.10.11.255/32 Direct 0 0 D 127.0.0.1 InLoopBack0 10.137.216.0/23 Direct 0 0 D 10.137.217.208 Vlanif20 10.137.217.208/32 Direct 0 0 D 127.0.0.1 InLoopBack0 10.137.217.255/32 Direct 0 0 D 127.0.0.1 InLoopBack0 127.0.0.0/8 Direct 0 0 D 127.0.0.1 InLoopBack0 127.0.0.1/32 Direct 0 0 D 127.0.0.1 InLoopBack0 127.255.255.255/32 Direct 0 0 D 127.0.0.1 InLoopBack0 255.255.255.255/32 Direct 0 0 D 127.0.0.1 InLoopBack0"
  },
  {
    "id": 379,
    "question": "The following rules exist in a certain ACL of the router. rule deny tcp source 192.168.1.0 0.0.0.255 destination 172.16.10.1 0.0.0.0 destination-port eq 21 Which statement is correct?",
    "options": {
      "A": "The source IP is 192.168.1.1, the destination IP is 172.16.10.1, and all TCP packets whose destination port number is 21 match this rule",
      "B": "The source IP is 192.168.1.1, the destination IP is 172.16.10.2, and all 1CP packets whose destination port number is 21 match this one",
      "C": "The source IP of the rule is 192.168.1.1, and the destination IP is 72.16.10.3. All TCP packets with the destination port number of 21 match this rule",
      "D": "The type of ACL is a basic ACL"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Explanation: The Rule says to deny any source in the range 192.168.1.0 with wildcard 0.0.0.255, meaning 255 IPs from 192.168.1.0 with destination 172.16.10.1 0.0.0.0, meaning only the exact IP of a destination with port 21. Only option (A) matches this. Option D is incorrect because basic ACLs do not specify destination IPs, protocols, or ports. Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100149308/AEJ0713J/17/resources/ cli/rule_acl_view.html \u2022 For TCP: rule [ rule-id ] { permit | deny } { 6 | tcp } [ source { source-ip-address { 0 | source-wildcard } | address-set address-set-name | any } | destination { destination-ip-address { 0 | destination\ufffewildcard } | address-set address-set-name | any } | source-port operator port [ port2 ] | destination-port operator port [ port2 ] | precedence precedence | tos tos | time-range time\ufffename | logging | dscp dscp-value | tcp-flag { tcp-flag [ mask mask-value ] | established | { ack | fin | psh | rst | syn | urg } * } ] * [ description description ] Example # Add a rule to deny the hosts at 172.16.0.0 to establish a connection to the WWW port (80) of the hosts at 172.16.160.0 and log violation events. [sysname-acl-adv-3101] rule deny tcp source 172.16.0.0 0.0.255.255 destination 172.16.160.0 0.0.0.25 5 destination-port eq www logging"
  },
  {
    "id": 380,
    "question": "Which of the following parameters cannot be used in the advanced visit control list?",
    "options": {
      "A": "Protocol number",
      "B": "Destination port number",
      "C": "Physical interface",
      "D": "Time range"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 12, Page # 12 \u2022 ACL classification based on ACL rule definition methods Category Number Range Description Basic ACL 2000 to 2999 Defines rules based on source IPv4 addresses, fragmentation information, and effective time ranges. Advanced ACL 3000 to 3999 Defines rules based on source and destination IPv4 addresses, IPv4 protocol types, ICMP types, TCP source/destination port numbers, UDP source/destination port numbers, and effective time ranges. Layer 2 ACL 4000 to 4999 Defines rules based on information in Ethernet frame headers of packets, such as source and destination MAC addresses and Layer 2 protocol types. User-defined ACL 5000 to 5999 Defines rules based on packet headers, offsets, character string masks, and user-defined character strings. User ACL 6000 to 6999 Defines rules based on source IPv4 addresses or user control list (UCL) groups, destination IPv4 addresses or destination UCL groups, IPv4 protocol types, ICMP types, TCP source/destination port numbers, and UDP source/destination port numbers."
  },
  {
    "id": 381,
    "question": "In the network shown in the figure below, host A logs in to router A through Telnet, and then obtains the configuration file of router B through FTP on the remote interface. How many TCP connections exist on router A at this time?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Explanation: How many TCP connections does Router A handle?"
  },
  {
    "id": 382,
    "question": "Which type of message is used by network devices running the SNMPv1 protocol to actively send alarm information?",
    "options": {
      "A": "Trap",
      "B": "Response",
      "C": "Get Request",
      "D": "Get-Next Request"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086963 SNMP Traps SNMP traps are notification messages sent by an SNMP agent to inform the NMS of alarms or events generated by the device. In this way, the administrator can learn the running status of the device in a timely manner. There are two types of SNMP traps: trap and inform. SNMPv1 does not support inform. The difference between trap and inform is that, after an SNMP agent sends an alarm or event to the NMS through an InformRequest message, the NMS needs to reply with an InformResponse message, as shown in Figure 1-14. Figure 1-14 SNMP trap operation"
  },
  {
    "id": 383,
    "question": "By default, network devices running the SNMPv2c protocol use which of the following port numbers to send trap messages to the network management system?",
    "options": {
      "A": "6",
      "B": "161",
      "C": "17",
      "D": "162"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Questions Library, Page # 135 Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086963#ENUS_TOPIC_017288170 %203 SNMP Port Numbers SNMP packets are common UDP packets. SNMP defines two default port numbers: \u2022 Port 161: This port number is used when the NMS sends Get, GetNext, GetBulk, and Set requests and the SNMP agent responds to these requests. This port number is configurable. Ensure that the port number used by the NMS to send request packets is the same as that used by the SNMP agent to respond to request packets. \u2022 Port 162: This port number is used by the SNMP agent to send traps or inform messages to the NMS. This port number is configurable. Ensure that the port number used by the SNMP agent to send traps or inform messages is the same as that used by the NMS to listen to traps or inform messages."
  },
  {
    "id": 384,
    "question": "Which of the following types of addresses is not included in IPv6 addresses?",
    "options": {
      "A": "Anycast address",
      "B": "Broadcast address",
      "C": "Unicast address",
      "D": "Multicast address"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 19, Page # 15"
  },
  {
    "id": 385,
    "question": "In the VRP interface, use the command startup saved-configuration backup.cfg. to configure the backup.cfg file for the next startup.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100083037/a43ef6dd/backingup-the- %20configuration-file The functions of the save and save config-filename commands are different. Note the following when using them: \u25aa The save command saves the current configurations to the next-startup configuration file on the storage device. You can run the display startup command to check the name of the next-startup configuration file. By default, the next-startup configuration file is the vrpcfg.dat file saved in home:/. \u25aa The save config-filename command backs up the current configurations to the file specified by config-filename on the storage device. If the storage path and name of the configuration file specified using configuration-file are the same as those of the next-startup configuration file, the save configuration-file command functions the same as the save command. \u25aa If you have run the save config-filename command to back up the current configurations and still want to deliver a new configuration, you need to run the save config-filename command again to back up the new configuration to the configuration file. This ensures that the new configuration is restored after the router restarts."
  },
  {
    "id": 386,
    "question": "Which of the following statements about Trunk port and Access port are correct?",
    "options": {
      "A": "Trunk ports can only send untagged frames",
      "B": "Access port can only send tagged frames",
      "C": "Trunk ports can only send tagged frames",
      "D": "Access port can only send untagged frames"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 08, Page # 17 Source: https://support.huawei.com/enterprise/en/doc/EDOC1100096323/819ade70/understanding\ufffevlans Table 8-12 Frame processing based on the port type Port Type Untagged Frame Processing Tagged Frame Processing Frame Transmission Access port Accepts an untagged frame and adds a tag with the default VLAN ID to the frame. \u25aa Accepts the tagged frame if the frame's VLAN ID matches the default VLAN ID. \u25aa Discards the tagged frame if the frame's VLAN ID differs from the default VLAN ID. After the PVID tag is stripped, the frame is transmitted. Trunk port \u25aa Adds a tag with the default VLAN ID to the untagged frame and then transmits it if the default VLAN ID is permitted by the port \u25aa Adds a tag with the default VLAN ID to the untagged frame and then discards it if the default VLAN ID is denied by the port. \u25aa Accepts the tagged frame if the frame's VLAN ID is permitted by the port. \u25aa Discards the tagged frame if the frame's VLAN ID is denied by the port. \u25aa If the frame's VLAN ID matches the default VLAN ID and the VLAN ID is permitted by the port, the switch removes the tag and transmits the frame. \u25aa If the frame's VLAN ID differs from the default VLAN ID, but the VLAN ID is still permitted by the port, the switch will directly transmit the frame."
  },
  {
    "id": 387,
    "question": "If the Length/Type of an Ethernet data frame is 0X8100, which of the following is correct?",
    "options": {
      "A": "This data frame must carry a VLAN TAG",
      "B": "There must be a UDP header in the upper layer of this data frame",
      "C": "There must be an IP header in the upper layer of this data frame",
      "D": "There must be a TCP header in the upper layer of this data frame"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100088104 VLAN Frame Format A switch identifies packets from different VLANs according to the information contained in its VLAN tags. IEEE 802.1Q adds a 4-byte VLAN tag between the Source/Destination MAC address and Length/Type fields of an Ethernet frame to identify the VLAN to which the frame belongs. Figure 1-1 shows the position of a VLAN tag in a VLAN data frame. Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178168/3e01a4f2/tpid TPID The Tag Protocol Identifier (TPID) specifies the protocol type of a VLAN tag. The TPID value defined in IEEE 802.1Q is 0x8100. Figure 10-6 shows the Ethernet packet format defined in IEEE 802.1Q. An IEEE 802.1Q tag, containing the TPID, lies between the Source Address field and the Length/Type field. A device checks the TPID value in a received packet to determine whether the VLAN tag is an S-VLAN tag or C-VLAN tag. The device compares the configured TPID value with the TPID value in the packet. For example, if a frame carries the VLAN tag with TPID 0x8100 but the TPID configured for a customer network on a device is 0x8200, the device considers the frame untagged."
  },
  {
    "id": 388,
    "question": "The two switches shown below have both enabled the STP protocol. An engineer made the following conclusions on this network. Which conclusions do you think are correct? (Multiple choice)",
    "options": {
      "A": "The G0/0/3 port of SWA is stable in the Forwarding state",
      "B": "The G0/0/2 port of SWA is stable in the Forwarding state",
      "C": "Both ports of SWA are designated ports",
      "D": "G0/0/2 port of SWB is stable in the Forwarding state",
      "E": "Both ports of SWB are designated ports"
    },
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: The bridge priority of SWA is small, so it will be the root bridge. So, all its ports will be designated ports. G0/0/2 of SWB will be the root port, and G0/0/3 of SWB will be the blocked port. So only option (E) is wrong Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086964 Root Bridge, Root Port, and Designated Port Three elements are involved in trimming a ring network into a tree network: root bridge, root port, and designated port. \u2022 Root bridge: There is only one root bridge on the entire STP network. The root bridge is the logical center, but not necessarily the physical center, of the network. Typically, the root bridge should have high performance and be located at a higher layer of the network. When the network topology changes, the root bridge will be re-elected accordingly. It is recommended that you manually configure the root bridge and secondary root bridge. Configure an optimal core switch as the root bridge to ensure stability of the STP Layer 2 network. Otherwise, new access devices may trigger STP root bridge switching, causing short service interruptions. \u2022 Root port: The root port on an STP device has the smallest path cost to the root bridge and is responsible for forwarding data to the root bridge. Among all STP-capable ports on a device, the port with the smallest root path cost is a root port. An STP device has only one root port, and there is no root port on the root bridge. \u2022 Designated port: The designated port is located on a designated bridge and forwards configuration BPDUs to the device or LAN, as illustrated in Figure 1. AP1 and AP2 are ports of S1; BP1 and BP2 are ports of S2; CP1 and CP2 are ports of S3. \u25aa S1 sends configuration BPDUs to S2 through AP1, so S1 is the designated bridge for S2, and AP1 is the designated port on S1. \u25aa S2 and S3 are connected to the LAN. If S2 forwards configuration BPDUs to the LAN, S2 is the designated bridge for the LAN, and BP2 is the designated port on S2. Figure 1-1 Designated bridge and designated port"
  },
  {
    "id": 389,
    "question": "What is the length of the Ethernet II frame containing the Ethernet header?",
    "options": {
      "A": "60-1560B",
      "B": "46-1500B",
      "C": "64-1500B",
      "D": "64-1518B"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100247749/e1be8fdc/minimum-frame\ufffelength-and-maximum-transmission-distance Minimum Frame Length and Maximum Transmission Distance Due to the limitation of the CSMA/CD algorithm, an Ethernet frame must be longer than or equal to a specified length. On the Ethernet, the minimum frame length is 64 bytes, which is determined jointly by the maximum transmission distance and the collision detection mechanism. The use of minimum frame length can prevent the following situation: station A finishes sending the last bit, but the first bit does not arrive at station B, which is far from station A. Station B considers that the line is idle and begins to send data, leading to a collision. Figure 1-2 Ethernet_II frame format The upper layer protocol must ensure that the Data field of a packet contains at least 46 bytes, so that the total length of the Data field, the 14-byte Ethernet frame header, and the 4-byte check code at the frame tail can reach the minimum frame length, as shown in Figure 1-2. If the Data field is less than 46 bytes, the upper layer must pad the field to 46 bytes. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100174721/ea0a043c/ethernet\ufffeii-frame Table 1-1 Link layer fields in an Ethernet II frame Field Length Description DMAC 6 bytes Destination MAC address. Six bytes for IPv4. This field identifies the receiver of a frame. SMAC 6 bytes Source MAC address. Six bytes for IPv4. This field identifies the sender of a frame. Type 2 bytes Protocol type. Table 1-3 lists the types of protocols that are directly encapsulated on a link. Data 46\u20131500 bytes Data field, which identifies the payload of a frame (which may contain padding bits). The minimum length of the Data field must be 46 bytes to ensure that the frame length is at least 64 bytes. This means that the 46-byte Data field is required even if you want to transmit only 1 byte of information. If the payload of the Data field is less than 46 bytes, the Data field must be padded to 46 bytes. The maximum length of the Data field is 1500 bytes. The frame length must be integral bytes. If the frame length is not integral bytes, the Data field must be padded to make the frame length be integral bytes. FCS 4 bytes This field provides a method for the receiver to determine whether a transmission error occurs. If errors are detected, involved frames are discarded. FCS is a general name for multiple verification methods. In an Ethernet frame, CRC is usually used as the FCS. Explanation: For minimum frame length, add the above lengths: 6 + 6 + 2 + 46 + 4 = 64 For minimum frame length, add the above lengths: 6 + 6 + 2 + 1500 + 4 = 1518"
  },
  {
    "id": 390,
    "question": "By default, the bridge priority of Huawei switches is 32768.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 09, Page # 41 Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086964 Configuring Basic STP"
  },
  {
    "id": 391,
    "question": "On the switch, which VLANs can be deleted by using the undo command? (Multiple choice)",
    "options": {
      "A": "vlan 4094",
      "B": "vlan 2",
      "C": "vlan 1",
      "D": "vlan 1024"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100041734/834147df/vlan\ufffeconfiguration-commands vlan Function: The vlan command creates a VLAN and displays the VLAN view. If the VLAN exists, the VLAN view is displayed. The undo vlan command deletes a VLAN. By default, all interfaces belong to the default VLAN, named VLAN 1. Format: vlan vlan-id vlan batch { vlan-id1 [ to vlan-id2 ] } &<1-10> undo vlan vlan-id undo vlan batch { vlan-id1 [ to vlan-id2 ] } &<1-10> Parameters Parameter Description Value vlan-id Specifies the VLAN ID. The value is an integer ranging from 1 to 4094. batch Configures VLANs in batches. - vlan-id1 to vlan\ufffeid2 Specifies range of VLANs to be configured in batches: \u2022 vlan-id1 specifies the start VLAN ID. \u2022 vlan-id2 specifies the end VLAN ID. vlan-id2 must be greater than or equal to vlan\ufffeid1. vlan-id1 and vlan-id2 define a range together. \u2022 If the parameter to vlan-id2 is not specified, only the VLAN specified by vlan-id1 is created. The vlan-id1 and vlan-id2 are integers ranging from 1 to 4094. Views System view Default Level 2: Configuration level Usage Guidelines Usage Scenario: To reduce broadcast domains and enhance security on a complex network, VLANs can be created on the network to isolate the devices that do not need to communicate each other. The vlan batch command creates multiple VLANs at one time, simplifying VLAN configuration. Follow-up Procedure: Assign VLANs according to network requirements. Precautions: VLAN 1 is the default VLAN, which cannot be deleted and does not need to be created. The vlan command can be used to create a VLAN and enter the VLAN view. If a VLAN has been created, the VLAN view is displayed after this command is used. The vlan command multiple times creates multiple VLANs. If a VLAN has been created, using this command cannot be used to create the same VLAN or modify the configurations of the VLAN. Explanation: All Vlan types can be deleted, but not 1 because it is the default pre-made Vlan."
  },
  {
    "id": 392,
    "question": "According to the command shown in the figure, which of the following descriptions is correct? (Multiple choice\uff09",
    "options": {
      "A": "The PVID of the GigabitEthernet0/0/2 port is 1",
      "B": "The PVID of the GigabitEthernet0/0/1 port is 10",
      "C": "The PVID of the GigabitEthernet0/0/2 port is 10",
      "D": "The PVID of the GigabitEthernet0/0/1 port is 11"
    },
    "correct": [
      "A",
      "B"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: PVID of trunk port is 1 as it is the default ID every port has. GE0/0/1 is configured with VLAN ID 10. If PVID (default VLAN) is not explicitly configured, it defaults to VLAN 1. Only VLAN 10 is allowed to pass, but that does not change the PVID unless configured. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064351/299a5aeb/port\ufffetrunk-pvid-vlan?utm_source=chatgpt.com port trunk pvid vlan Function The port trunk pvid vlan command specifies the default VLAN for a trunk interface. The undo port trunk pvid vlan command restores the default VLAN of a trunk interface to the default setting. By default, VLAN 1 is the default VLAN of trunk interfaces. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064351/a25e7c6d/port\ufffedefault-vlan Prerequisites The VLAN to be configured as the default VLAN has been created. The interface type is access. If not, run the port link-type command to change the interface type. Precautions You can also run the port command in the VLAN view to configure the default VLAN of an interface. The two commands have the same function. A super VLAN cannot be configured as the default VLAN of interfaces. This command is invalid on a member interface of an Eth-Trunk. If you run the port default vlan command multiple times in the same interface view, only the latest configuration takes effect. Example # Configure VLAN 3 (an existing VLAN) as the default VLAN of GE0/0/1 (an access interface). <AC6605> system-view [AC6605] interface gigabitethernet 0/0/1 [AC6605-GigabitEthernet0/0/1] port link-type access [AC6605-GigabitEthernet0/0/1] port default vlan 3"
  },
  {
    "id": 393,
    "question": "Which of the following advantages does the router-on-a-stick approach achieve routing intercommunication between VLANs?",
    "options": {
      "A": "Reduce the number of equipment",
      "B": "Reduce routing table entries",
      "C": "Reduce the use of IP addresses",
      "D": "Reduce the number of chain connections"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 10, Page # 09 Explanation: The term \"chain connections\" in this context refers to the multiple physical links that would otherwise be necessary to connect the router to each VLAN individually. By implementing the router-on-a-stick method, these multiple connections are consolidated into a single trunk link between the router and the switch. This effectively reduces the number of physical connections, aligning with the advantage described in choice D."
  },
  {
    "id": 394,
    "question": "When the host frequently moves, which VLAN division method is most appropriate?",
    "options": {
      "A": "Based on the MAC address division",
      "B": "Based on the strategy division",
      "C": "Based on IP subnet division",
      "D": "Based on port division"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000017271/a6bce928/dividing-a-lan\ufffeinto-vlans-based-on-ip-subnets Dividing a LAN into VLANs Based on IP Subnets Context IP subnet-based and protocol-based VLAN division are called network layer-based VLAN division, which reduces manual VLAN configuration workload and allows users to easily join a VLAN, transfer from one VLAN to another, and exit from a VLAN. IP subnet-based VLAN division is applicable to networks that have traveling users and require simple management. VLANs configured based on IP subnets process only untagged frames. and treat tagged frames in the same manner as VLANs configured based on ports. After receiving untagged frames, a device determines the VLANs to which the frames belong based on their source IP addresses before sending them to the corresponding VLANs. Explanation: Based on the MAC address division, as the MAC address does not change and the condition is host moves, so it is not suitable. Based on port division: if the device itself moves, then no matter whether the VLAN is done on the port. Based on IP subnet division: this method includes the IP being assigned to the device to if the host moves then also it will not create the problem. As IP will be assigned."
  },
  {
    "id": 395,
    "question": "Which of the following descriptions are wrong about the Forwarding state in the spanning tree protocol? (Multiple choice)",
    "options": {
      "A": "The port in the Forwarding state can forward data packets",
      "B": "The port in the Forwarding state does not learn the source MAC address of the packet",
      "C": "Ports in Forwarding state can receive BPDU packets",
      "D": "The port in the Forwarding state will definitely send BPDU packets"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Slide # 09, Page # 32 Explanation: B. The port in the Forwarding state does not learn the source MAC address of the packet. \u2022 Incorrect. Ports in the Forwarding state learn the source MAC addresses of incoming packets to update the MAC address table. D. The port in the Forwarding state will send BPDU packets. \u2022 Incorrect. Only designated ports send BPDUs. Non-designated ports in the Forwarding state do not send BPDUs."
  },
  {
    "id": 396,
    "question": "On the VRP platform, what is the role of the command \"interface vlanif <vlanid>\"?",
    "options": {
      "A": "Create a VLAN",
      "B": "No such command",
      "C": "Create or enter the VLAN virtual interface view",
      "D": "Configure VLAN for a port"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178172/433bc017/configuri%20ng\ufffea-%20vlanif-interface Procedure"
  },
  {
    "id": 397,
    "question": "The second layer ACL can match the source MAC, destination MAC, source IP, destination IP, and other information.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 12, Page # 12 \u2022 ACL classification based on ACL rule definition methods Category Number Range Description Basic ACL 2000 to 2999 Defines rules based on source IPv4 addresses, fragmentation information, and effective time ranges. Advanced ACL 3000 to 3999 Defines rules based on source and destination IPv4 addresses, IPv4 protocol types, ICMP types, TCP source/destination port numbers, UDP source/destination port numbers, and effective time ranges. Layer 2 ACL 4000 to 4999 Defines rules based on information in Ethernet frame headers of packets, such as source and destination MAC addresses and Layer 2 protocol types. User-defined ACL 5000 to 5999 Defines rules based on packet headers, offsets, character string masks, and user-defined character strings. User ACL 6000 to 6999 Defines rules based on source IPv4 addresses or user control list (UCL) groups, destination IPv4 addresses or destination UCL groups, IPv4 protocol types, ICMP types, TCP source/destination port numbers, and UDP source/destination port numbers."
  },
  {
    "id": 398,
    "question": "The configuration of the country code will affect the actual transmission frequency and maximum transmission power.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100033726/82579c28/countrycode- %20channel-compliance-table-and-channel-and-power-restrictions Country Code & Channel Compliance Table, and Channel and Power Restrictions Different countries or regions have specified the channels and maximum transmit power of radio signals that can be used locally. Radio signals working on different channels may have varying signal strength. The Country Code & Channel Compliance Table describes the country code and channel compliance, the maximum power allowed by each channel, and the mapping relationship between channels and frequencies. You can directly search for this table on the Huawei enterprise service technical support website (https://support.huawei.com/enterprise). N/A indicates that the country or region does not support the channel."
  },
  {
    "id": 399,
    "question": "What equipment is generally involved in the WLAN deployment scheme in the enterprise scenario? (Multiple choice)",
    "options": {
      "A": "AC (Access Controller)",
      "B": "Poe switch",
      "C": "CPE",
      "D": "AP"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064365/ed705f9/application\ufffescenarios-for-poe APs are usually installed in the corridors or on the ceilings where power sockets are unavailable. In many WLAN applications, the administrator manages many APs that require unified power supply and management. In this case, power supply management is difficult. As shown in Figure 5-24, the AC that has the PoE function deployed directly provides power for each AP, without the need for additional external power supplies. This reduces cable connections, saves network construction costs, and facilitates AP management. Explanation: \u2022 AP (Access Point): Access Points are devices that allow wireless devices to connect to a wired network using Wi-Fi. They are essential components of the WLAN, providing wireless coverage to the users. \u2022 PoE Switch: Power over Ethernet (PoE) switches provide both power and data connectivity to devices like Access Points over a single Ethernet cable. \u2022 AC (Access Controller): The Access Controller manages and controls multiple Access Points (APs) in the network. It handles tasks such as configuration, firmware updates, security policies, and load balancing."
  },
  {
    "id": 400,
    "question": "The role of telnet.read_all() in Telnetlib is to read all data until EOF. If the echo does not return EOF, it will always be blocked.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 21, Page # 24 Method Function Telnet.read_until (expected, timeout=None) Read data until a given byte string, expected, is encountered or until timeout seconds have passed. Telnet.read_all () Read all data until EOF as bytes; block until connection closed. Telnet.read_very_eager() Read everything that can be without blocking in I/O (eager). Raise EOFError if connection closed and no cooked data available. Return b'' if no cooked data available otherwise. Do not block unless in the midst of an IAC sequence. Telnet.write(buffer) Write a byte string to the socket, doubling any IAC characters. Telnet.close() Close the connection."
  },
  {
    "id": 401,
    "question": "In the network shown in the figure below, all routers run the OSPF protocol, and the link cost value is shown in the figure. What is the cost value of the route entry to the network 10.0.0.0/8 in the RTA routing table?",
    "options": {
      "A": "70",
      "B": "100",
      "C": "20",
      "D": "60"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei slide # 06, Page # 17 Explanation: OSPF follows the shortest path, which means that the shortest path to router D was through RTC, which would cost 60. Possible Paths and Cost Calculation:"
  },
  {
    "id": 402,
    "question": "The router output information is shown in the figure. Which of the following statements is wrong?",
    "options": {
      "A": "The IP address of the Ethernet0/0/0 interface is 10.0.12.1/24",
      "B": "The MTU value of the Ethernet0/0/0 interface is 1480",
      "C": "The physical link of the Ethernet0/0/0 interface is normal",
      "D": "The broadcast address corresponding to the Ethernet0/0/0 interface is 10.0.12.255"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Explanation: A. Correct \u2014 The IP address is shown as 10.0.12.1/24, which matches. B. Incorrect \u2014 The MTU is clearly shown as 1500 bytes, not 1480. So this statement is wrong. C. Correct \u2014 Both the physical state (current state: UP) and line protocol state (UP) indicate the link is operational. D. Correct \u2014 With a subnet mask of /24, the broadcast address 10.0.12.255 is indeed correct."
  },
  {
    "id": 403,
    "question": "As shown in the figure below, which of the following statement is correct?",
    "options": {
      "A": "Host A can ping host B",
      "B": "Only when the masks of host A and host B are set to always, host A and host B can communicate",
      "C": "The broadcast addresses of host A and host B are the same",
      "D": "The IP address masks of host A and host B are different, so host A and host B cannot communicate"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei eNSP Configuration Explanation: Host IP Address Subnet Mask Subnet Range Broadcast Address A 10.0.12.1 /30 10.0.12.0 \u2013 10.0.12.3 10.0.12.3 B 10.0.12.5 /24 10.0.12.0 \u2013 10.0.12.255 10.0.12.255 \u2022 Host A's /30 subnet considers only .0 \u2013 .3 valid addresses. \u2022 Host B's IP (.5) lies outside Host A's subnet. \u2022 Host A assumes Host B is on a different network and tries to forward the packet via a default gateway, but no gateway is configured, so the ping fails. Even though Host B sees A within its /24 subnet, communication still fails because Host A never initiates ARP for Host B. Why Other Options Are Incorrect Option Explanation A. Host A can ping Host B False \u2013 Host A sees B as out-of-subnet; ping fails B. Only when the masks of host A and host B are set to always... Incorrect grammar and logic C. The broadcast addresses of Host A and Host B are the same False \u2013 10.0.12.3 \u2260 10.0.12.255"
  },
  {
    "id": 404,
    "question": "ip route-static 10.0.12.0 255.255.255.0 192.168.1.1, which the description about command is correct?",
    "options": {
      "A": "This command configures a route to the 10.0.12.0 network",
      "B": "The priority of this route is 100",
      "C": "If the router learns a router with the same destination network as this route through other protocols, the router will prefer this route",
      "D": "This command configures a route to the 192.168.1.1 network"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 05, Page # 29 Source: Huawei Slide # 05, Page # 30 Explanation: The default static route priority is 60 unless specified (Option B is wrong), and the router will only accept the defined route. The format for static route commands begins with the destination IP network, followed by its subnet mask, and then the next-hop IP. This command does NOT configure a route to 192.168.1.1, but rather uses it as a next-hop for reaching 10.0.12.0 so Option D is also wrong"
  },
  {
    "id": 405,
    "question": "What address does 192.168.1.127/25 represent?",
    "options": {
      "A": "Broadcast",
      "B": "Multicast",
      "C": "Network",
      "D": "Host"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://jodies.de/ipcalc?host=192.168.1.1&mask1=24&mask2=25 Subnets Netmask: 255.255.255.128 = 25 11111111.11111111.11111111.1 0000000 Wildcard: 0.0.0.127 00000000.00000000.00000000.0 1111111 Network: 192.168.1.0/25 11000000.10101000.00000001.0 0000000 (Class C) Broadcast: 192.168.1.127 11000000.10101000.00000001.0 1111111 HostMin: 192.168.1.1 11000000.10101000.00000001.0 0000001 HostMax: 192.168.1.126 11000000.10101000.00000001.0 1111110 Hosts/Net: 126 (Private Internet) Explanation: A subnet mask of /25 means that the first 25 bits of the IP address are used for the network portion, leaving 7 bits for the host portion. The possible host can be 126. Subnet mask /25 (or 255.255.255.128 in dotted-decimal notation) means: Network address: 192.168.1.0 Broadcast address: 192.168.1.127 192.168.1.127 does not fall within the range of addresses assignable to hosts. We can see that it is similar to broadcast IP."
  },
  {
    "id": 406,
    "question": "What are the characteristics of VLAN based on the port?",
    "options": {
      "A": "Add VLAN tags to the data frame according to the IP address carried in the message",
      "B": "Assign a VLAN ID according to the protocol type and encapsulation format of the data frame",
      "C": "No need to reconfigure the VLAN when the host moves",
      "D": "The host mobile location needs to be reconfigured VLAN"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100352667/526f31bd/example-for\ufffeassigning-vlans-based-on-ports Example for Assigning VLANs Based on Ports Networking Requirements In Figure 4-22, multiple user terminals are connected to switches in a data center. Users who use the same service all access the network using different devices. To ensure communication security and avoid broadcast storms, the administrator wants to allow users who use the same service to communicate with each other but isolate users who use different services. Configure the switch with port-based VLAN assignment and add ports connected to users who use the same service to the same VLAN. This way, users who use the same services can directly communicate, but users using different services cannot communicate over Layer 2. Explanation: VLAN membership is tied to specific switch ports. If a host is moved to another port, it will not remain in the same VLAN unless the new port is also manually configured for the same VLAN."
  },
  {
    "id": 407,
    "question": "As shown in the figure below, the network and switch configuration information are shown in the figure. Which of the following statements is correct? (Multiple choice)",
    "options": {
      "A": "Data frames on the two links do not contain a VLAN TAG",
      "B": "The PVID of the switch GigabitEthernet0/0/1 port is 20",
      "C": "Host A and Host B can be pinged",
      "D": "Host A and Host B cannot ping"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100278054/AEL11217/08/resources /dc/port_hybrid_pvid_vlan.html Usage Scenario An interface may receive untagged and tagged frames, but the AP processes only tagged frames. Therefore, the AP adds a tag to each untagged frame received by an interface. The default VLAN ID of the interface can be added to untagged frames so that these frames are forwarded in the default VLAN. A hybrid interface processes Ethernet frames as follows: \u2022 When the interface receives an untagged frame, it tags the frame with the default VLAN ID. If the default VLAN ID is allowed by the interface, the interface accepts the frame. Otherwise, the interface discards the frame. \u2022 When the interface receives a tagged frame, it accepts the frame if the VLAN ID of the frame is in the list of allowed VLAN IDs. Otherwise, the interface discards the frame. \u2022 If the VLAN ID of a frame is allowed by the interface, the interface forwards the frame. Prerequisites The VLAN to be specified as the default VLAN has been created. Precautions The port hybrid pvid vlan command only specifies the default VLAN for an interface but does not add the interface to the default VLAN. If you run the port hybrid pvid vlan command multiple times in the same interface view, only the latest configuration takes effect. Explanation: Picture 2 shows that the port is configured to have untagged VLAN 10 20, so it will not contain a VLAN tag. Moreover, both PCs are in different VLANs, so they cannot ping each other. Lastly, GigabitEthernet0/0/1 port is labelled as PVID20, so (B) is also correct."
  },
  {
    "id": 408,
    "question": "In the STP protocol, which of the following factors will affect the election of the root switch? (Multiple choice)",
    "options": {
      "A": "The IP address of the switch",
      "B": "Switch interface ID",
      "C": "Switch interface bandwidth port",
      "D": "Switch priority",
      "E": "MAC address of the switch"
    },
    "correct": [
      "D",
      "E"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Slide # 09, Page # 14 Source: Huawei Slide # 09, Page # 15"
  },
  {
    "id": 409,
    "question": "The configuration information of an interface of the router is shown in the figure, then Which VLAN data packet can this port receive? interface Gigabit Ethernet 0/0/2.30 dot1q termination vid 100 ip address 10.0.21.1 255.255.255.0 arp broadcast enable",
    "options": {
      "A": "1",
      "B": "100",
      "C": "30",
      "D": "20"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100112348/79dc6b8f/overview-of\ufffevlan-termination Definition VLAN termination is a VLAN tag processing mechanism. After VLAN termination is enabled on a device, the device identifies VLAN tags in received packets, removes single or double tags from the packets, and then forwards packets at Layer 3 or takes other actions. These VLAN tags are only useful before termination, and are not used in Layer 3 forwarding or other processing. A device with VLAN termination enabled processes incoming and outgoing packets as follows: \u2022 Removes VLAN tags from the packets received on interfaces, and then forwards the packets at Layer 3 or takes other actions. \u2022 Adds VLAN tags to the packets that will be sent out through interfaces. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100276781/60c75ace/configuring-a\ufffedot1q-termination-sub-interface-to-implement-inter-vlan-communication Run dot1q termination vid low-pe-vid [ to high-pe-vid ] Dot1q termination is configured on the sub-interface. Sub-interfaces of different main interfaces can be associated with the same VLAN, whereas sub\ufffeinterfaces of the same main interface cannot be associated with the same VLAN. Explanation: \u2022 Dot1q termination: The device removes the outer VLAN tag from any received single-tagged or double tagged packets, and adds a VLAN tag to the packets to be sent by an interface. \u2022 In Huawei routers and switches, when you configure dot1q termination vid 100 This means that the sub-interface (GigabitEthernet 0/0/2.30) is configured to receive and process packets tagged with VLAN ID 100. \u2022 The .30 at the end of the interface name (i.e., 0/0/2.30) is just a sub-interface identifier and is not related to the VLAN ID. Why the other options are wrong? \u2022 A. 1 \u2013 VLAN 1 is not specified anywhere in the configuration. \u2022 C. 30 \u2013 This is just the sub-interface number, not the VLAN. \u2022 D. 20 \u2013 Not mentioned in the config either."
  },
  {
    "id": 410,
    "question": "In a Layer 2 network with redundant links, which of the following protocols can be used to avoid loops?",
    "options": {
      "A": "VRRP",
      "B": "ARP",
      "C": "UDP",
      "D": "STP"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 09, Page # 08 Source: Huawei Slide # 09, Page # 08 (notes section) \u2022 On an Ethernet network, loops on a Layer 2 network may cause broadcast storms, MAC address flapping, and duplicate data frames. STP is used to prevent loops on a switching network. \u2022 STP constructs a tree to eliminate loops on the switching network. \u2022 The STP algorithm is used to detect loops on the network, block redundant links, and prune the loop network into a loop-free tree network. In this way, proliferation and infinite loops of data frames are avoided on the loop network."
  },
  {
    "id": 411,
    "question": "When the switch port receives a data frame that does not carry a VLAN TAG, it must add PVID",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100096323/819ade70/understa%20ndin g-vlans VLAN Assignment VLAN assignment can be based on interface numbers, and VLAN frames are processed depending on the interface type. The network administrator configures a port default VLAN ID (PVID), that is, the default VLAN ID, for each port on the switching device. That is, a port belongs to a VLAN by default. \u2022 When a data frame reaches a port, it is marked with the PVID if the data frame carries no VLAN tag and the port is configured with a PVID. \u2022 If the data frame carries a VLAN tag, the switching device will not add a VLAN tag to the data frame even if the port is configured with a PVID. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100096323/819ade70/understa VLAN Communication Implementation of VLAN Communication To improve the efficiency in processing frames, frames within a switch all carry VLAN tags for uniform processing. When a data frame reaches a port of the switch, if the frame carries no VLAN tag and the port is configured with a PVID, the frame is marked with the port's PVID. If the frame has a VLAN tag, the switch will not mark a VLAN tag for the frame regardless of whether the port is configured with a PVID. The switch processes frames differently according to the type of port receiving the frames. The following describes the frame processing according to the port type."
  },
  {
    "id": 412,
    "question": "As shown in the figure below, the router uses a sub-interface as the gateway of the host. The IP address of the gateway is 10.0.12.2. Which of the following commands can achieve this requirement? (Multiple choice)",
    "options": {
      "A": "interface GigabitEthernet0/0/0.20 dotlq termination vid 10 ip address 10.0.12.2 255.255.255.0 arp broadcast enable #",
      "B": "interface GigabitEthernet0/0/0.10 dotlq termination vid 10 ip address 10.0.12.2 255.255.255.0 arp broadcast enable #",
      "C": "interface GigabitEthernet0/0/0.10 dotlq termination vid 20 ip address 10.0.12.2 255.255.255.0 arp broadcast enable #",
      "D": "interface GigabitEthernet0/0/0.20 dotlq termination vid 20 ip address 10.0.12.2 255.255.255.0 arp broadcast enable #"
    },
    "correct": [
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: CD commands terminate VLAN 20, which is what needed to be done. AB terminates VLAN 10, which is wrong Source: https://support.huawei.com/enterprise/en/doc/EDOC1100112348/cbf869f6/example-for\ufffeconfiguring-dot1q-termination-sub-interfaces-to-implement-inter-vlan-communication#EN\ufffeUS_TASK_0177868189"
  },
  {
    "id": 413,
    "question": "The output information of a switch is shown in the figure. Which of the following interfaces can forward data frames with VLAN ID 40 and not carry tags when forwarding?",
    "options": {
      "A": "GE0/0/2",
      "B": "GE0/0/5",
      "C": "GE0/0/3",
      "D": "GE0/0/4"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Explanation: \u2022 Untagged port for VLAN 40: \u25aa GE0/0/5 is listed under UT (Untagged) for VLAN 40. This means: \u25aa VLAN 40 frames are sent and received without VLAN tags on this port. \u2022 Tagged ports for VLAN 40: \u25aa GE0/0/1, GE0/0/3, and GE0/0/4 are listed under TG (Tagged), so they send VLAN 40 frames with tags."
  },
  {
    "id": 414,
    "question": "Which of the following packet types is used by RADIUS to indicate authentication rejection?",
    "options": {
      "A": "Access-Accept",
      "B": "Access-Request",
      "C": "Access-Challenge",
      "D": "Access-Reject"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000177218/c58849f8/radius\ufffepackets Table 2-1 Authentication types Packet Type Description Access-Request This is the first packet transmitted in a RADIUS interaction process. This packet carries user authentication information, such as user name and password. The Access-Request packet is from the RADIUS client to the RADIUS server. The RADIUS server determines whether a user is allowed to access the network according to the user information carried in the received Access\ufffeRequest packet. Access-Accept This packet is sent by the RADIUS server to respond to the Access-Request packet sent by the client. If all attributes in the Access-Request packet are acceptable, the server determines that the user passes the authentication and sends this packet. After receiving this packet, the client grants the network access rights to the user. Access-Reject This packet is sent by the RADIUS server to respond to the Access-Request packet sent by the client. If any attribute in the Access-Request packet is unacceptable, the RADIUS server determines that the user fails the authentication and sends this packet. Access\ufffeChallenge During an EAP authentication, when the RADIUS server receives an Access-Request packet carrying a user name, it generates a random MD5 challenge and sends the MD5 challenge to the client through an Access-Challenge packet. After the client encrypts the user password using the MD5 challenge, the client sends the encrypted password in an Access-Request packet to the RADIUS server. The RADIUS server compares the encrypted password received from the client with the locally encrypted password. If they are the same, the server determines the user is valid. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100306152/e1dc45f9/understanding\uffferadius-based-aaa"
  },
  {
    "id": 415,
    "question": "NAPT distinguishes the IP addresses of different users through the protocol numbers in TCP, UDP, or IP packets.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 14, Page # 20 Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100149308/AEJ0713J/17/resources/ admin/sec_admin_nat_0094_3.html#:~:text=NAPT%20translates%20both%20IP%20address es,need%20to%20access%20the%20Internet NAPT NAPT translates both IP addresses and ports to enable multiple private addresses to share one or multiple public addresses. NAPT applies to scenarios with a few public addresses but many private users who need to access the Internet. Figure 1 shows its mechanism. Figure 1 Mechanism of NAPT"
  },
  {
    "id": 416,
    "question": "Which of the following authentication methods does not require the user name and password?",
    "options": {
      "A": "authentication-mode local",
      "B": "authentication-mode none",
      "C": "authorization-mode hwtacacs",
      "D": "Authentication-mode hwtacacs"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178178/c57f8bee/aaascheme#dc_fd _aaa_0005_1 Authentication Scheme An authentication scheme is used to define methods for user authentication and the order in which authentication methods take effect. An authentication scheme is applied to a domain. It is combined with the authorization scheme, accounting scheme, and server template in the domain for user authentication, authorization, and accounting. Authentication Methods Supported by a Device \u2022 RADIUS authentication: User information is configured on the RADIUS server through which user authentication is performed. \u2022 HWTACACS authentication: User information is configured on the HWTACACS server through which user authentication is performed. \u2022 Local authentication: The device functions as an authentication server and user information is configured on the device. This mode features fast processing and low operation costs. However, the information storage capacity is subject to the device hardware. \u2022 Non-authentication: Users are completely trusted without validity check. This mode is rarely used."
  },
  {
    "id": 417,
    "question": "Telnet is based on the TCP protocol.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 15, Page # 17 Source: https://support.huawei.com/enterprise/en/doc/EDOC1100366532/b5747c35/overview-of\ufffetelnet Overview of Telnet The Telecommunication Network Protocol (Telnet) is derived from ARPANET released in 1969. It is the earliest Internet application. A Telnet connection is a Transmission Control Protocol (TCP) connection used to transmit data with interspersed Telnet control information. Telnet uses the client/server model to present an interactive interface that enables a terminal to remotely log in to a server. A user can log in to one host and then use Telnet to remotely log in to and configure and manage multiple hosts without having to connect each one to a terminal. Figure 3-1 shows the Telnet client/server model. Figure 3-1 Telnet client/server model"
  },
  {
    "id": 418,
    "question": "CAPWAP protocol stipulates the communication standard between AC and AP. Which of the following statements about the CAPWAP protocol is correct?",
    "options": {
      "A": "CAPWAP is an application-layer protocol based on TCP transmission",
      "B": "To establish a CAPWAP tunnel, FIT Ap can only discover the AC through broadcast messages",
      "C": "CAPWAP In order to reduce the burden on the AP, a tunnel is used to transmit control messages and data messages at the same time",
      "D": "AP can encapsulate the user's data message in CAPWAP and forward it by AC"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100334297/2471df23/understa%20ndin g-%20capwap DTLS Encryption for CAPWAP Control Tunnels Extending the protocol architecture of Transport Layer Security (TLS), DTLS ensures the security for UDP packets, which are used by CAPWAP. Clients can discover servers in static or dynamic mode. \u25aa Static mode A static IP address list of servers is preconfigured on clients. When a client goes online, it unicasts a Discovery Request message to each server in the preconfigured IP address list. After receiving the Discovery Request message, the servers respond to the client with a Discovery Response message. The client then selects a server to establish a CAPWAP tunnel. \u25aa Dynamic mode A client can dynamically discover servers in one of these modes: Dynamic Host Configuration Protocol (DHCP), Domain Name Service (DNS), and broadcast."
  },
  {
    "id": 419,
    "question": "The wireless access controller (AC, Access Controller) is the unified management and control device in the FIT AP architecture. Which of the following description of the role of AC is wrong?",
    "options": {
      "A": "No matter when the data is forwarded, the user's data message will be forwarded by AC",
      "B": "User access control",
      "C": "User access authentication",
      "D": "AP configuration delivery"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 16, Page # 34 Explanation: No matter when the data is forwarded, the user's data message will be forwarded by AC. This statement is incorrect because, in FIT AP architectures, data forwarding can be performed locally by the APs in many cases, especially when local forwarding is configured to improve network performance and reduce the load on the AC."
  },
  {
    "id": 420,
    "question": "How many more bytes are the packets using MPLS label double-layer nesting technology than the original IP packets?",
    "options": {
      "A": "32",
      "B": "8",
      "C": "4",
      "D": "16"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100118961 Figure 1-5 illustrates the structure of a 4-byte MPLS label header. Figure 1-5 Structure of the MPLS label header An MPLS label header contains the following fields: \u2022 Label: a 20-bit field that identifies a label value. \u2022 Exp: a 3-bit field used for extension. This field is used by the class of service (CoS) function, which is similar to Ethernet 802.1p. \u2022 BoS: a 1-bit field that identifies the bottom of a label stack. MPLS supports multiple labels, which are stacked. If the BoS field of a label is set to 1, the label is at the bottom of the label stack. \u2022 TTL: an 8-bit field indicating a time to live (TTL) value. This field implements the same function as the TTL field in IP packets. Calculation:"
  },
  {
    "id": 421,
    "question": "::1/128 is the IPv6 loopback address.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 19, Page # 25 Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100334321/AEM1020X/05/resourc es/dc/dc_feature_ipv6_0004.html#:~:text=An%20IPv6%20loopback%20address%20is,a%20 loopback%20interface%20for%20example \u2022 Loopback address An IPv6 loopback address is 0:0:0:0:0:0:0:1/128 or ::1/128. Similar to IPv4 loopback address 127.0.0.1, IPv6 loopback address is used when a node needs to send IPv6 packets to itself. This IPv6 loopback address is usually used as the IP address of a virtual interface (a loopback interface, for example). The loopback address cannot be used as the source or destination IP address of packets that need to be forwarded. Explanation: The IPv6 loopback address is ::1/128, representing a single host (128-bit prefix) for internal communication. This is standardized in RFC 4291."
  },
  {
    "id": 422,
    "question": "Which of the following IPv6 addresses is a global unicast address?",
    "options": {
      "A": "2001::12:1",
      "B": "FF02::1",
      "C": "FF::02::2E0:FCFF:FEEF:FEC",
      "D": "FEE:FCFF:FEEF:FEC"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 19, Page # 25 Explanation: Option (A) 2001::12:1 This address falls within the range of 2000::/3 (which covers from 2000:: to 3FFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF), indicating that it is a global unicast address."
  },
  {
    "id": 423,
    "question": "In the campus network planning, in which of the following ways can business VLAN be divided?",
    "options": {
      "A": "Divide the VLAN by the access member structure",
      "B": "Divide the VLAN by business",
      "C": "Divide VLAN by logical area",
      "D": "Divide the VLAN by geographical area"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 22, Page # 17 Explanation: In campus network planning, business VLANs are typically divided based on business functions or services (e.g., separating HR, finance, or IoT traffic) to ensure security, traffic prioritization, and efficient resource allocation."
  },
  {
    "id": 424,
    "question": "When configuring the router through the Console, what is the correct setting of the terminal emulation program?",
    "options": {
      "A": "0bps, 8 data bits, 1 stop bit, no checksum, and no flow control",
      "B": "9600bps, 8 data bits, 1 stop bit, even parity, and hardware flow control",
      "C": "9600bps, 8 data bits, 1 stop bit, no checksum, and no flow control",
      "D": "4800bps, 8 data bits, 1 stop bit, odd checksum, and no flow control"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://www.cisco.com/c/en/us/support/docs/storage\ufffenetworking/management/217970-troubleshoot-and-apply-correct-terminal.html The settings in the Terminal Emulator software need to be set correctly; otherwise, unintelligible characters show up on the screen. When you set up the connection, use these settings: Bits per sec : 9600 Data bits : 8 Parity : none Stop bits : 1 Flow control : none Here is an example of how to configure these settings on a Windows-based PC with Hyper Terminal: Here is an example of how to configure these settings on PuTTY Terminal Emulator:"
  },
  {
    "id": 425,
    "question": "In the VRP interface, use the command delete vrpcfg.zip to delete the file. You must empty the recycle bin to completely delete the file.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 03, Page # 42 Source: Huawei Slide # 03, Page # 31"
  },
  {
    "id": 426,
    "question": "The router running the OSPF protocol reaches the FULL state first, and then synchronizes the LSDB.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 06, Page # 2 Source: https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13685- 13.html Full In this state, routers are fully adjacent with each other. All the router and network LSAs are exchanged and the routers' databases are fully synchronized. Full is the normal state for an OSPF router. If a router is stuck in another state, it is an indication that there are problems when the adjacencies are formed. The only exception to this is the 2-way state, which is normal in a broadcast network. Routers achieve the FULL state with their DR and BDR in NBMA/broadcast media and FULL state with every neighbor in the residual media such as point-to-point and point-to-multipoint. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100301642/32a400ec/ospf\ufffefundamentals The OSPF neighbor state machine has the following states: \u2022 Full: This state occurs when two neighbors complete their LSDB synchronization and establish an adjacency."
  },
  {
    "id": 427,
    "question": "As shown in the following figure, router A and router B establish an OSPF neighbor relationship. The OSPF process number of router A is 1, and the area number is 0. Which of the following configurations on router A can enable router B to obtain the network segment of host A routing? (Multiple choice)",
    "options": {
      "A": "ospf 1 area 0.0.0.0 network 192.168.1.2 0.0.0.0",
      "B": "ospf 1 import-route direct",
      "C": "ospf 1 area 0.0.0.0 network 192.168.0.0 0.0.255.255",
      "D": "ospf 1 area 0.0.0.0 network 192.168.1.0 0.0.0.255"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: \u2022 Option B: import-route direct (Correct Answer) This command imports directly connected routes (like 192.168.1.0/24) into the OSPF routing process, making them available to OSPF neighbors even if the interfaces are not participating in OSPF. Since the interface connecting to Host A is not part of the OSPF adjacency, this method ensures the network is still advertised. \u2022 Option D: network 192.168.1.0 0.0.0.255 (Correct Answer) This OSPF configuration uses a wildcard mask of 0.0.0.255, which matches all IP addresses from 192.168.1.0 to 192.168.1.255 (i.e., the /24 subnet). It enables OSPF on the interface within this subnet and advertises the 192.168.1.0/24 network to OSPF neighbors like Router B. \u2022 Option A: network 192.168.1.2 0.0.0.0 (Incorrect Answer) This matches only a single host address (192.168.1.2) and does not enable OSPF on the entire subnet or ensure the connected network is advertised effectively. \u2022 Option C: network 192.168.0.0 0.0.255.255 (Incorrect Answer) Although this covers the correct IP range, it still does not ensure the advertisement of the connected subnet if the interface does not form an OSPF adjacency."
  },
  {
    "id": 428,
    "question": "How to enter the view of OSPF area 0 in the VRP operating system? (Multiple choice)",
    "options": {
      "A": "[Huawei-ospf-1] area 0 enable",
      "B": "[Huawei-ospf-1] area 0",
      "C": "[Huawei] ospf area 0",
      "D": "[Huawei-ospf-1] area 0.0.0.0"
    },
    "correct": [
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Slide # 06, Page # 39"
  },
  {
    "id": 429,
    "question": "What is the protocol number corresponding to the OSPF protocol at the network layer?",
    "options": {
      "A": "89",
      "B": "6",
      "C": "0",
      "D": "1"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://info.support.huawei.com/hedex/api/pages/EDOC1100277644/AEM10221/03/resource s/vrp/feature_0003998103.html OSPF Packet Format OSPF packets are encapsulated into IP packets. The protocol number is 89. OSPF packets are classified into five types of packets: Hello packets, DD packets, LSR packets, LSU packets, and LSAck packets."
  },
  {
    "id": 430,
    "question": "As shown in the figure below, all hosts can pass normally, so what is correct about the correspondence between the MAC address and the port in the MAC table of the SWB?",
    "options": {
      "A": "MAC-A GO/0/2 MAC-B G0/0/2 MAC-C G0/0/3",
      "B": "MAC-A G0/0/3 MAC-B G0/0/3 MAC-C GO/0/1",
      "C": "MAC-A G0/0/1 MAC-B G0/0/1 MAC-C G0/0/3",
      "D": "MAC-A G0/0/1 MAC-B G0/0/2 MAC-C G0/0/3"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Explanation: In a scenario where Switch SWB is connected to Host C on interface G0/0/1 and to another switch (SWA) on interface G0/0/3: \u2022 When Host C sends a frame, SWB learns MAC-C on G0/0/1. \u2022 When frames from Hosts A and B arrive via SWA, SWB learns MAC-A and MAC-B on G0/0/3."
  },
  {
    "id": 431,
    "question": "Which of the following statements about the role of the STP protocol's Forward Delay is correct?",
    "options": {
      "A": "Prevent temporary loops",
      "B": "There is a delay when the blocking state and the Disabled state are converted",
      "C": "Reduce the time interval of BPDU sending. Improve the convergence speed of STP",
      "D": "Improve the survival time of BPDUs to ensure that the configured BPDUs can be forwarded to more switches"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100092143 \u25aa Forward Delay The Forward Delay timer specifies the delay in a port state transition. When a link fails, STP calculation is triggered and the spanning tree structure changes accordingly. However, new configuration BPDUs cannot be flooded immediately across the entire network. If the new root port and designated port forward data immediately, transient loops may occur. Therefore, STP defines a delay mechanism for port state transition. The newly selected root port and designated port must wait for two Forward Delay intervals before transitioning to the Forwarding state. During this period, the new configuration BPDUs can be transmitted over the network, preventing transient loops. The Forward Delay timer defines the time that is spent in Listening or Learning state. The default Forward Delay value is 15 seconds. This means that the port stays in Listening state for 15 seconds and then stays in Learning state for another 15 seconds before transitioning to the Forwarding state. The port in Listening or Learning state does not forward user traffic, effectively preventing transient loops."
  },
  {
    "id": 432,
    "question": "The configuration information of a certain port of the switch is shown in the figure. Which of the following statements is wrong?",
    "options": {
      "A": "The port type is Hybrid",
      "B": "If the port receives a data frame without a VLAN TAG, the switch needs to add a VLAN TAG 100",
      "C": "If the VLAN TAG carried in the data frame is 200, the switch strips off the VLAN TAG",
      "D": "If the VLAN TAG carried in the data frame is 100, the switch will strip off the VLAN TAG and send it out"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: http://support.huawei.com/enterprise/en/doc/EDOC1000178168/f9b8a34a/adding\ufffeand-removing-vlan-tags Table 5-2 Frame processing based on the port type Port Type Untagged Frame Processing Tagged Frame Processing Frame Transmission Hybrid port \u25aa Adds a tag with the default VLAN ID to an untagged frame and accepts the frame if the port permits the default VLAN ID. \u25aa Adds a tag with the default VLAN ID to an untagged frame and discards the frame if the port denies the default VLAN ID. \u25aa Accepts a tagged frame if the VLAN ID carried in the frame is permitted by the port. \u25aa Discards a tagged frame if the VLAN ID carried in the frame is denied by the port. If the frame's VLAN ID is permitted by the port, the frame is transmitted. The port can be configured to transmit frames with tags. Explanation of Each Line: \u2022 port hybrid pvid vlan 100: \u25aa Sets the default VLAN ID (PVID) to 100 for untagged incoming frames. \u25aa Frames without a VLAN tag will be tagged with VLAN 100 on ingress. \u2022 port hybrid tagged vlan 100: \u25aa Outgoing frames for VLAN 100 will retain the tag. \u2022 port hybrid untagged vlan 200: \u25aa Outgoing frames for VLAN 200 will have their VLAN tags stripped (sent untagged)."
  },
  {
    "id": 433,
    "question": "Neither the Alternate interface nor the Backup port in RSTP can forward user traffic, nor can they receive, process, and forward BPDUs.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100276753/2bd0e592/rstpport\uffferoles-and-%20port-states Alternate port and backup port Category Alternate Port Backup Port From the perspective of configuration BPDU transmission An alternate port is blocked after learning a configuration BPDU sent from another bridge. An alternate port is blocked after learning a configuration BPDU sent from itself. From the perspective of user traffic An alternate port acts as a backup of the root port and provides an alternate path from the designated bridge to the root bridge. A backup port acts as a backup of the designated port and provides a backup path from the root bridge to the related network segment. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100332771/b4e804a4/understanding\ufffestp-rstp Port Role Table 6-19 lists the port roles supported in STP and RSTP, among which the root port (RP) and designated port (DP) are the basic port roles. Compared with STP, RSTP adds three port roles: alternate port, backup port, and edge port. Table 6-19 Port roles defined in STP and RSTP Spanning Tree Protocol Root Port Designated Port Alternate Port Backup Port Edge Port STP \u221a \u221a x x x RSTP \u221a \u221a \u221a \u221a \u221a Alternate Port An alternate port backs up the root port and provides an alternate path from the designated bridge to the root bridge. It is blocked after learning the configuration BPDUs sent by other bridges. Backup Port A backup port backs up a designated port and provides a backup path from the root bridge to the related network segment. It is blocked after learning the configuration BPDUs sent by itself. Explanation: That\u2019s not entirely accurate. In Rapid Spanning Tree Protocol (RSTP), both the Alternate and Backup ports can indeed receive BPDUs to determine the best path to the root bridge. However, they do not forward user traffic or BPDUs. Their primary role is to provide redundancy; the Alternate port serves as a backup for the Root port, and the Backup port serves as a backup for another port on the same segment that forwards traffic."
  },
  {
    "id": 434,
    "question": "Which of the following statements about VLANIF interfaces is correct?",
    "options": {
      "A": "VANIF interface does not need to learn the MAC address",
      "B": "VLANIF interface has no MAC address",
      "C": "Different VLANIF interfaces can use the same IP address",
      "D": "VLANIF interface is a three-layer interface"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000060766/f3dc84c8/what\ufffearethe-%20functions-of-vlan-and-vlanif-interfaces What Are the Functions of VLAN and VLANIF Interfaces? The functions of VLAN assignment are as follows: \u2022 Limits broadcast domains. Broadcast domains are limited to conserve bandwidth and improve network efficiency. \u2022 Enhances LAN security. Packets from different VLANs are transmitted separately. Hosts in a VLAN cannot communicate directly with hosts in another VLAN. \u2022 Improves network robustness. A fault in a VLAN does not affect hosts in other VLANs. \u2022 Allows flexible construction of virtual groups. With VLAN technology, hosts in different geographical locations can be grouped together, simplifying network construction and maintenance. The functions of configuring VLANIF interfaces are as follows: A VLANIF interface is a VLAN-based Layer 3 logical interface and can be configured with an IP address. After VLANs are assigned, users in the same VLAN can communicate with each other while users in different VLANs cannot. To implement communication between VLANs, you can configure a logical Layer 3 interface (VLANIF interface)."
  },
  {
    "id": 435,
    "question": "Which of the following statements about the edge port in the RSTP protocol is correct?",
    "options": {
      "A": "The edge port discards the received configuration BPDU packet",
      "B": "The edge port can be directly transferred from the Disabled to the Forwarding state",
      "C": "Edge port participates in RSTP operation",
      "D": "The interconnection ports between switches need to be set as edge ports"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100332771/9fc55767/configuring-edge\ufffeports-and-bpdu-filtering-ports-for-rstp Configuring Edge Ports and BPDU Filtering Ports (for RSTP) Context RSTP defines a port that is located at the network edge and directly connected to a terminal as an edge port. Edge ports do not receive or process configuration BPDUs or participate in RSTP calculation. They can change from the Disabled state to the Forwarding state without any delay, as if RSTP was disabled. Edge ports send BPDUs. If the BPDUs are sent to other networks, flapping may occur on these networks. BPDU filtering can be configured on the edge ports to disable them from processing and sending BPDUs."
  },
  {
    "id": 436,
    "question": "Static NAT can only achieve one-to-one mapping between private addresses and public addresses.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100034231/70655889/example\ufffefor-configuring-static-one-to-one-nat Figure 5-18 Networking diagram for configuring static one-to-one NAT Configuration Roadmap The configuration roadmap is as follows:"
  },
  {
    "id": 437,
    "question": "A certain ACL of the router is in the following rules: rule deny source 192.168.2.0 0.0.0.255 destination 172.16.10.2 0.0.0.0. Which statement is correct?",
    "options": {
      "A": "All TCP packets whose source IP is 172.16.10.2 and destination IP is 192.168.2.1 match this rule",
      "B": "All TCP packets whose source IP is 192.168.2.1 and destination IP is 172.16.10.1 match this rule",
      "C": "All TCP packets whose source IP is 172.16.10.2 and destination IP is 192.168.2.0 match this rule",
      "D": "All TCP packets whose source IP is 192.168.2.1 and destination IP is 172.16.10.2 are configured with this rule."
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 12, Page # 13 Explanation: The ACL rule is: rule deny source 192.168.2.0 0.0.0.255 destination 172.16.10.2 0.0.0.0 This means: \u2022 Source IP: 192.168.2.0 with wildcard mask 0.0.0.255 \u21d2 This matches 192.168.2.0 to 192.168.2.255 \u2022 Destination IP: 172.16.10.2 with wildcard mask 0.0.0.0 \u21d2 This matches only 172.16.10.2 \u2022 This is a deny rule So, it matches any packet (not just TCP unless specified) with: \u2022 Source IP: 192.168.2.x \u2022 Destination IP: 172.16.10.2"
  },
  {
    "id": 438,
    "question": "RADIUS is a common protocol to implement AAA.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100198635/896511fc/configuring\uffferadius-aaa RADIUS Authentication, Authorization, and Accounting RADIUS is often used to implement authentication, authorization, and accounting (AAA). It uses the client/server model and protects a network from unauthorized access. It is often used in network environments that require high security and control of remote user access. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100306152/e1dc45f9/understanding\uffferadiusbased-aaa Overview of RADIUS AAA can be implemented using multiple protocols, among which RADIUS is most frequently used in real\ufffeworld applications. RADIUS is a protocol that uses the client/server model in distributed mode and protects a network from unauthorized access. It is often used on networks that require high security and allow remote user access. It defines the UDP-based RADIUS packet format and transmission mechanism, and specifies UDP ports 1812 and 1813 as the default authentication and accounting ports, respectively."
  },
  {
    "id": 439,
    "question": "What kind of message does the DHCP server use to confirm that the host can use the IP address?",
    "options": {
      "A": "DHCP DISCOVER",
      "B": "DHCP ACK",
      "C": "DHCP OFFER",
      "D": "DHCP REQUEST"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100276747/225eec10/dhcp-messages Table 3-1 DHCP message types DHCP Message Description DHCP Discover A DHCP client broadcasts this message to locate a DHCP server when the client attempts to connect to a network for the first time. DHCP Offer A DHCP server sends this message in response to a DHCP Discover message. A DHCP Offer message carries configuration information. DHCP Request A DHCP client sends this message in the following scenarios: \u2022 After the client starts, it broadcasts a DHCP Request message to respond to a DHCP Offer message sent by a DHCP server. \u2022 After the client restarts, it broadcasts a DHCP Request message to confirm the configuration (including the allocated IP address). \u2022 After the client obtains an IP address, it unicasts or broadcasts a DHCP Request message to renew the IP address lease. DHCP ACK A DHCP server sends this message to acknowledge a DHCP Request message sent from a DHCP client. After receiving a DHCP ACK message, the DHCP client obtains configuration parameters (including an IP address). DHCP NAK A DHCP server sends this message to reject a DHCP Request message from a DHCP client. For example, a DHCP server will send this message if it determines that there is no available IP address after receiving a DHCP Request message. DHCP Decline A DHCP client sends this message to notify the DHCP server that the allocated IP address conflicts with another IP address. The DHCP client then applies to the DHCP server for another IP address. DHCP Release A DHCP client sends this message to release its allocated IP address. After receiving a DHCP Release message, the DHCP server can allocate this IP address to another DHCP client. DHCP Inform A DHCP client sends this message to obtain network configuration parameters, such as the gateway address and DNS server address, after it has obtained an IP address."
  },
  {
    "id": 440,
    "question": "The administrator has configured the router as shown in the figure. What IP address can a host connected to the G1/0/0 interface of the router obtain through DHCP?",
    "options": {
      "A": "The IP address data obtained by the host 10.10.10.0/24",
      "B": "The IP address obtained by the host may belong to the 10.10.10.0/24 network, or it may belong to the 10.20.20.0/24 network",
      "C": "The host cannot obtain an IP address",
      "D": "The IP address obtained by the host belongs to the 10.20.20.0/24 network"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100306163/bece38d2/configuring\ufffean-interface-address-pool A DHCPv4 server selects an address pool based on whether a DHCPv4 relay agent is deployed. If no DHCPv4 relay agent is deployed, the DHCPv4 server selects an address pool that is on the same network segment as the IPv4 address of the interface that receives DHCPv4 request messages. If a DHCPv4 relay agent is deployed, the DHCPv4 server selects an address pool that is on the same network segment as the IPv4 address specified in the giaddr field of received DHCPv4 request messages. Explanation: The router is configured with two DHCP address pools: \u2022 pool1: for the 10.10.10.0/24 network \u2022 pool2: for the 10.20.20.0/24 network But the key to determining which pool will be used lies in the interface IP address: [Router-GigabitEthernet1/0/0] ip address 10.10.10.1 24 The interface G1/0/0 is in the 10.10.10.0/24 network, and the router uses the command: [Router-GigabitEthernet1/0/0] dhcp select global This enables the global DHCP server. The router will match the interface IP address to the appropriate DHCP pool. Since the interface IP is 10.10.10.1/24, it matches pool1."
  },
  {
    "id": 441,
    "question": "On the VRP operating platform, what is the command to display the current interface configuration in the interface view?",
    "options": {
      "A": "display users",
      "B": "display version",
      "C": "display this",
      "D": "display ip interface brief"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064353/cf86c2d8/display-this Function: The display this command displays the running configuration in the current view. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064353/b048882d/display-ip\ufffeinterface Function: The display ip interface brief command displays brief information about interface IP addresses, including the IP address, subnet mask, physical status, link-layer protocol status, and number of interfaces in different states."
  },
  {
    "id": 442,
    "question": "What commands and views exist in the VRP operating platform? (Multiple choice)",
    "options": {
      "A": "User view",
      "B": "Interface view",
      "C": "Agreement view",
      "D": "System view"
    },
    "correct": [
      "A",
      "B",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000178166/c1bb51ce/enteringcommand\ufffeviews Common Command Views Name How To Enter Function User view When a user logs in to the device, the user enters the user view and the following prompt is displayed: <HUAWEI> In the user view, you can view the running status and statistics of the device. System view Run the system-view command and press Enter in the user view. The system view is displayed. <HUAWEI> system-view Enter system view, return user view with Ctrl+Z. [HUAWEI] In the system view, you can set the system parameters of the device, and enter other function views from this view. Interface view Run the interface command and specify an interface type and number to enter the interface view. [HUAWEI] interface gigabitethernet X/Y/Z [HUAWEI-GigabitEthernetX/Y/Z] X/Y/Z indicates the number of an interface that needs to be specified. It is in the format of stack ID/card number/interface sequence number. The interface GigabitEthernet is used as an example. In the interface view, you can configure interface parameters including physical attributes, link layer protocols, and IP addresses."
  },
  {
    "id": 443,
    "question": "On the VRP platform, which of the following methods can be used to access the previous history commands?",
    "options": {
      "A": "CTRL +U",
      "B": "CTRL +P",
      "C": "Left cursor",
      "D": "Up cursor"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000128405/6e85b486/displayhistory\ufffecommand You can view historical commands using the following methods: \u2022 To view the previous historical command, press the Up arrow key or Ctrl+P. If there is an earlier historical command, the earlier historical command is displayed. \u2022 To view the next historical command, press the Down arrow key or Ctrl+N. If there is a new historical command, the new historical command is displayed."
  },
  {
    "id": 444,
    "question": "If the subnet mask of a network segment 150.25.0.0 is 255.255.224.0, then what is a valid host address in the network segment?",
    "options": {
      "A": "150.25.2.24",
      "B": "150.25.0.0",
      "C": "150.25.1.255",
      "D": "150.15.3.30"
    },
    "correct": [
      "A",
      "C"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: Network address: 150.25.0.0 Subnet mask: 255.255.224.0 \u2192 this is equivalent to /19 \u2022 Subnet mask /19 \u2192 gives 8192 IPs per subnet \u2022 Range of IPs for this subnet: \u25aa First IP (Network Address): 150.25.0.0 \u25aa Last IP (Broadcast Address): 150.25.31.255 \u25aa Valid host addresses: From 150.25.0.1 to 150.25.31.254"
  },
  {
    "id": 445,
    "question": "On the broadcast network, both DR and BDR use the multicast address 224.0.0.6 to receive link-state update messages.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100034072/32a400ec/ospf\ufffefundamentals Table 5-7 OSPF network types Network Type Description Broadcast A network with the link layer protocol of Ethernet or Fiber Distributed Data Interface (FDDI) is a broadcast network by default. On a broadcast network: \u2022 Hello packets, LSU packets, and LSAck packets are usually transmitted in multicast mode. 224.0.0.5 is an IP multicast address reserved for an OSPF device. 224.0.0.6 is an IP multicast address reserved for an OSPF DR or backup designated router (BDR). \u2022 DD and LSR packets are transmitted in unicast mode. Non-Broadcast Multi\ufffeAccess (NBMA) A network with the link layer protocol of frame relay (FR) or X.25 is an NBMA network by default. On an NBMA network, protocol packets such as Hello packets, DD packets, LSR packets, LSU packets, and LSAck packets are sent in unicast mode. Point-to-Multipoint (P2MP) No network is a P2MP network by default, no matter what type of link layer protocol is used on the network. A network can be changed to a P2MP network. The common practice is to change a non-fully meshed NBMA network to a P2MP network. On a P2MP network: \u2022 Hello packets are transmitted in multicast mode using the multicast address 224.0.0.5. \u2022 Other types of protocol packets, such as DD packets, LSR packets, LSU packets, and LSAck packets are sent in unicast mode. Point-to-point (P2P) By default, a network where the link layer protocol is PPP, HDLC, or LAPB is a P2P network. On a P2P network, protocol packets such as Hello packets, DD packets, LSR packets, LSU packets, and LSAck packets are sent in multicast mode using the multicast address 224.0.0.5."
  },
  {
    "id": 446,
    "question": "What are the roles of the OSPF protocol DR and BDR? (Multiple choice)",
    "options": {
      "A": "Reduce the number of adjacencies",
      "B": "Reduce the types of OSPF protocol packets",
      "C": "Reduce the time to establish adjacency",
      "D": "Reduce the number of exchanges of link-state information."
    },
    "correct": [
      "A",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Slide # 06, Page # 33 Explanation: In OSPF on broadcast networks (like Ethernet), when many routers are on the same network segment, they would all try to form adjacencies with each other, leading to a large number of adjacencies and a flood of link-state advertisements (LSAs). To solve this, Designated Router (DR) and Backup Designated Router (BDR) are elected: Role of DR and BDR: Role Description A. Reduce the number of adjacencies \u2713 Only routers form full adjacencies with the DR and BDR, not with every other router. B. Reduce the types of OSPF protocol packets \uf0fb Not true \u2014 all OSPF packet types are still used. C. Reduce the time to establish adjacency \uf0fb Not necessarily; DR/BDR elections may delay initial adjacency. D. Reduce the number of exchanges of link-state information \u2713 Only DR forwards LSAs to all others, minimizing flooding."
  },
  {
    "id": 447,
    "question": "Which of the following statements about the TTL field in the IP packet header is correct?",
    "options": {
      "A": "TTL defines the time interval at which the source host can send data packets",
      "B": "TTL defines the number of packets that the source host can send",
      "C": "Every time an IP packet passes through a router, its TTL value will be reduced by 1",
      "D": "Each time an IP packet passes through a router, its TTL value will be increased by 1"
    },
    "correct": [
      "C"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100117312 Table 1-1 Parameter description of the tracert command Parameter Description Value -a source-ip\ufffeaddress Specifies the source address of trace packets. source\ufffeip-address is the IP address of the local interface. The value is in dotted decimal notation. -f first-TTL Specifies the initial time to live (TTL) of trace packets. Carried in the IP header, the TTL field indicates the lifetime of a trace packet and specifies the maximum number of devices that the packet can pass through. The TTL value is set on the source and reduced by 1 each time the packet passes through one device. When the TTL value is reduced to 0, the packet is discarded, and an ICMP Time Exceeded message is sent to the source. If first-TTL is specified and the number of hops that a trace packet passes through is less than the specified value, the TTL value will be greater than 0 after the packet passes through all the nodes. In this case, no ICMP Time Exceeded message is sent to the source. If max-TTL is also specified, the value of first-TTL must be smaller than the value of max-TTL. The value is an integer ranging from 1 to 255. The default value is 1. -m max-TTL Specifies the maximum TTL. Generally, the value of max-TTL is set to the number of hops that the packet passes through. To change the TTL value, specify this parameter. If first-TTL is specified, the value of max-TTL must be greater than the value of first-TTL. The value is an integer ranging from 1 to 255. The default value is 30."
  },
  {
    "id": 448,
    "question": "In the network shown in the figure below, all routers run the OSPF protocol, which device is an ABR? (Multiple choice)",
    "options": {
      "A": "Router A",
      "B": "Router C",
      "C": "Router D",
      "D": "Router B"
    },
    "correct": [
      "A",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: An ABR (Area Border Router) is a router that connects two or more OSPF areas, with at least one interface in Area 0 (the backbone area). Let\u2019s analyze each router: Router Areas Connected Is ABR? Reason Router A Area 0 & Area 2 Yes Connects Area 0 to another area Router B Area 0 & Area 1 Yes Connects Area 0 to another area Router C Area 2 & Area 4 No Does not connect to Area 0 \u2192 Not ABR Router D Area 1 & Area 4 No Does not connect to Area 0 \u2192 Not ABR So, only Router A and Router B qualify as ABRs."
  },
  {
    "id": 449,
    "question": "It is known that there are two entries in the routing table of a router. If the router wants to forward packets with the destination address of 9.1.4.5, which of the following statements is correct?",
    "options": {
      "A": "Choose the second item as the best matching item, because the cost of the RIP protocol is small",
      "B": "Select the second item as the best matching item, because the route is a more accurate match relative to the destination 9.1.4.5",
      "C": "Choose the second item as the best match, because Ethernet0 is faster than serial0",
      "D": "Select the first item as the best matching item, because the priority value of the ospf protocol is higher"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 05, Page # 22"
  },
  {
    "id": 450,
    "question": "For multiple paths to the same destination network, the router needs to select by comparing the magnitude of the Preference value. If the Preference is the same, then select according to the magnitude of the Cost value.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086956 \u2022 Pre: indicates the routing protocol preference of a route. There may multiple routes to the same destination, which have different next hops and outbound interfaces. These routes may be discovered by different routing protocols or manually configured. A router selects the route with the highest preference (the smallest value) as the optimal route. For the routing protocol preference, see Routing Protocol Preference. \u2022 Cost: indicates the route cost. When multiple routes to the same destination have the same preference, the route with the lowest cost is selected as the optimal route. The Preference value is used to compare the preferences of different routing protocols, while the Cost value is used to compare the preferences of different routes of the same routing protocol. Explanation: There may be multiple routes to the same destination, which have different next hops and outbound interfaces. These routes may be discovered by different routing protocols or manually configured. A router selects the route with the highest preference (the smallest value) as the optimal route."
  },
  {
    "id": 451,
    "question": "When the LACP mode is used for link aggregation, what is the default system interference level of Huawei switches?",
    "options": {
      "A": "36864",
      "B": "4096",
      "C": "24576",
      "D": "32768"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1000017271/63a1ce94/optional-setting-the\ufffelacp-system-priority Procedure"
  },
  {
    "id": 452,
    "question": "After the network administrator uses the TracertRoute function on the router device, in the data packet sent by the router, what is the value of the Protocol field in the IPv4 header?",
    "options": {
      "A": "17",
      "B": "2",
      "C": "6",
      "D": "1"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100117312 Table 1-1 Parameter description of the tracert command Parameter Description Value -a source-ip\ufffeaddress Specifies the source address of trace packets. source\ufffeip-address is the IP address of the local interface. The value is in dotted decimal notation. -f first-TTL Specifies the initial time to live (TTL) of trace packets. Carried in the IP header, the TTL field indicates the lifetime of a trace packet and specifies the maximum number of devices that the packet can pass through. The TTL value is set on the source and reduced by 1 each time the packet passes through one device. When the TTL value is reduced to 0, the packet is discarded, and an ICMP Time Exceeded message is sent to the source. If first-TTL is specified and the number of hops that a trace packet passes through is less than the specified value, the TTL value will be greater than 0 after the packet passes through all the nodes. In this case, no ICMP Time Exceeded message is sent to the source. If max-TTL is also specified, the value of first-TTL must be smaller than the value of max-TTL. The value is an integer ranging from 1 to 255. The default value is 1."
  },
  {
    "id": 453,
    "question": "The information shown in the figure is the port status information displayed on a switch running STP. According to this information, which of the following descriptions is wrong?",
    "options": {
      "A": "The priority of this switch is 0",
      "B": "This network may only contain this switch",
      "C": "This switch may be connected to six other switches",
      "D": "This switch is the root switch in the network"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Explanation: Correct Answer: A. The priority of this switch is 0 Wrong: The output only shows the MST instance ID (MSTID = 0), which refers to MST instance 0 and not the bridge priority value. The switch priority cannot be determined from this output alone. Therefore, stating that the priority is 0 is not supported by the given information. Option B. This network may only contain this switch Correct: All ports are in the Designated role and Forwarding state, which is consistent with a single-switch environment. In such a case, no STP election occurs, and the switch designates all ports. Option C. This switch may be connected to six other switches Correct: There are six ports shown as forwarding and in the Designated role. Each of these could potentially connect to a separate switch or device. Therefore, the statement is logically valid. Option D. This switch is the root switch in the network Correct: In STP, a switch with all ports in the Designated role and in the Forwarding state typically indicates that it is acting as the Root Bridge within the topology."
  },
  {
    "id": 454,
    "question": "Two authentication domains, \"Area 1\" and \"Area 2\" are configured on a router acting as an authentication server. If the user authenticates with the correct user name \"huawei\" and password \"hello\", this user will be assigned to which authentication domain?",
    "options": {
      "A": "Authentication domain \"Area 1\"",
      "B": "Authentication domain \"default domain\"",
      "C": "Authentication domain \"default_admin domain\"",
      "D": "Authentication domain \"Area 2\""
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/DOC1000141870/26361446/example-for\ufffeconfiguring-default-domain-based-user-management?utm_source=chatgpt.com Domain and Default Domain Overview The device manages access users based on domains. Each access user belongs to a domain. The authentication, authorization, and accounting schemes can be bound to domain views. The device manages the access users in the same domain in the same manner, for example, using the same authentication, authorization, and accounting scheme. As shown in Figure 9-23, the users are authenticated in the specified domain when entered user names contain domain names or in the default domain when entered user names do not contain domain names. If a user name contains a domain name, the user belongs to this domain; otherwise, the user belongs to the default domain. If most users on a network belong to the same domain, you can configure this domain as the default domain so that these users do not need to enter the domain name when logging in to the device. Default domains fall into default administrative domain and default common domain. \u2022 The administrator (logging in through Telnet, SSH, FTP, HTTP, or Terminal) is authenticated in the default administrative domain. By default, the default administrative domain is default_admin. \u2022 The common users (logging in through MAC, Portal, or 802.1X authentication) are authenticated in the default common domain. By default, the default common domain is default. Explanation: In Huawei devices, when a user logs in without specifying an authentication domain (i.e., without appending @domain to the username), the system assigns the user to a default domain. \u2022 Default Domains: \u25aa default_admin: Used for administrative access methods like Telnet, SSH, FTP, and HTTP. \u25aa default: Used for common user access methods like 802.1X, MAC, or Portal authentication. Therefore, if a user logs in with the username \"huawei\" and password \"hello\" without specifying a domain (e.g., \"huawei@Area1\"), the system assigns the user to the default domain."
  },
  {
    "id": 455,
    "question": "By default, it takes at least 30 seconds for the port status in the STP protocol to change from Disabled to Forwarding.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100092143 \u2022 Forward Delay The Forward Delay timer specifies the delay in a port state transition. When a link fails, STP calculation is triggered and the spanning tree structure changes accordingly. However, new configuration BPDUs cannot be flooded immediately across the entire network. If the new root port and designated port forward data immediately, transient loops may occur. Therefore, STP defines a delay mechanism for port state transition. The newly selected root port and designated port must wait for two Forward Delay intervals before transitioning to the Forwarding state. During this period, the new configuration BPDUs can be transmitted over the network, preventing transient loops. The Forward Delay timer defines the time that is spent in Listening or Learning state. The default Forward Delay value is 15 seconds. This means that the port stays in Listening state for 15 seconds and then stays in Learning state for another 15 seconds before transitioning to the Forwarding state. The port in Listening or Learning state does not forward user traffic, effectively preventing transient loops. Explanation: In the Spanning Tree Protocol (STP), when a port transitions from a disabled (or blocking) state to the forwarding state, it undergoes two intermediate states: Listening and Learning. \u2022 Listening State: The port listens for Bridge Protocol Data Units (BPDUs) to ensure no loops occur. This state lasts for 15 seconds. \u2022 Learning State: The port learns MAC addresses to populate the MAC address table but still doesn't forward frames. This state also lasts for 15 seconds. Therefore, the total time for a port to move from a disabled state to the forwarding state is: 15 seconds (Listening) + 15 seconds (Learning) = 30 seconds This default behavior ensures network stability by preventing loops during topology changes."
  },
  {
    "id": 456,
    "question": "Which of the following parts compose SNMP? (Multiple choice)",
    "options": {
      "A": "NMS",
      "B": "Agent process",
      "C": "Managed object",
      "D": "Management information base"
    },
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Source: Huawei Slide # 18, Page # 15"
  },
  {
    "id": 457,
    "question": "An AC is a unified management and control device in the AC + Fit AP architecture. Which of the following functions is not supported by the AC.",
    "options": {
      "A": "User access control",
      "B": "AP configuration delivery",
      "C": "User access authentication",
      "D": "User data packet forwarding regardless of data forwarding"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100096325/f342dc7/wlan\ufffearchitecture Fit AP Architecture In Fit AP architecture, an AC manages and controls multiple APs (Fit APs) in a centralized manner, as shown in Figure 9-4. Figure 9-4 Fit AP architecture In Fit AP architecture, APs work together with an AC to implement wireless access. \u2022 The AC implements all security, control, and management functions. These functions include mobile user management, identity authentication, VLAN assignment, radio management, and data forwarding. \u2022 Fit APs implement wireless radio access, including radio signal transmission and detection response, data encryption and decryption, and data transmission acknowledgment. \u2022 The AC and APs communicate using Control and Provisioning of Wireless Access Points (CAPWAP). They can be connected across a Layer 2 or Layer 3 network."
  },
  {
    "id": 458,
    "question": "What protocol does OSPF run over?",
    "options": {
      "A": "IP",
      "B": "TCP",
      "C": "UDP",
      "D": "HTTP"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100082074 Definition The Open Shortest Path First (OSPF) protocol, developed by the Internet Engineering Task Force (IETF), is a link-state Interior Gateway Protocol (IGP). At present, OSPF Version 2, defined in RFC 2328, is intended for IPv4, and OSPF Version 3, defined in RFC 2740, is intended for IPv6. Unless otherwise stated, OSPF stated in this document refers to OSPF Version 2."
  },
  {
    "id": 459,
    "question": "In RSTP, can a backup port replace a faulty root port?",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100276753/2bd0e592/rstp\ufffeport-roles-and-port-states Table 14-7 Alternate port and backup port Category Alternate Port Backup Port From the perspective of configuration BPDU transmission An alternate port is blocked after learning a configuration BPDU sent from another bridge. An alternate port is blocked after learning a configuration BPDU sent from itself. From the perspective of user traffic An alternate port acts as a backup of the root port and provides an alternate path from the designated bridge to the root bridge. A backup port acts as a backup of the designated port and provides a backup path from the root bridge to the related network segment. Explanation: In RSTP (Rapid Spanning Tree Protocol), port roles and transitions are more dynamic than in traditional STP, but they still follow certain rules: \u2022 A Backup Port is a redundant path to the same designated bridge as the designated port on the same switch. It's a backup to the Designated Port, not the Root Port. \u2022 A Root Port is the port that receives the best BPDU from the Root Bridge and is used to reach the Root Bridge. So, if a Root Port fails, a Backup Port cannot take over its role, because it is not connected to a better path toward the Root Bridge. Instead, the port that can become the new Root Port would typically be an Alternate Port, which is a backup path to the Root Bridge."
  },
  {
    "id": 460,
    "question": "The configuration order (config) is the default match order for ACL rules on Huawei devices.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100086647 Matching Order An ACL consists of multiple deny | permit clauses, each of which describes a rule. These rules may repeat or conflict. For example, an ACL contains two rules: rule deny ip destination 10.1.0.0 0.0.255.255 //Reject the packets destined for network segment 10.1.0.0/16. rule permit ip destination 10.1.1.0 0.0.0.255 //Permit the packets destined for network segment 10.1.1.0/24, which has a smaller range than 10.1.0.0/16. The permit and deny rules conflict. If the system first matches a packet destined for 10.1.1.1 against the deny rule, the packet is discarded. However, if the system matches the packet against the permit rule first, the packet is forwarded. Therefore, if ACL rules repeat or conflict, the matching order decides the matching result. The device supports two matching orders: the configuration order (config) and the automatic order (auto). The default order is config."
  },
  {
    "id": 461,
    "question": "The data link layer uses PPP encapsulation, and the IP addresses of the two ends of the link can be in different network segments.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100278979/5e7a58c1/ppp\ufffeconfiguration Overview of PPP This section describes the principles of the Point-to-Point Protocol (PPP) and related protocols. Point-to-point (P2P) connections are simple wide area network (WAN) connections. A P2P link uses PPP as its link-layer protocol. PPP, which works at the second layer (data link layer) of the open systems interconnection (OSI) model, is mainly used on links that support full-duplex to transmit data. PPP is widely used because it provides user authentication, supports synchronous and asynchronous communication, and is easy to extend. Context Devices on both ends of a PPP link may have IP addresses at different network segments. When the two devices communicate with each other, one device automatically adds the host route of the other end to the local routing table of direct routes. If one end has an incorrect IP address configured, incorrect routing information will be advertised on the network. To prevent incorrect routing information, prohibit the local device from adding the peer host route to the local routing table of direct routes. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100278760/5e7a58c1/ppp\ufffeconfiguration Configuring an Interface to Support PPP Configure an interface to support PPP so that it can implement point-to-point (P2P) traffic transmission. Usage Scenario PPP is a link layer protocol that transmits network layer packets over P2P links. PPP defines a group of protocols, including LCP and NCP. \u2022 During the LCP negotiation phase, an MRU, negotiation timeout period, and PPP LCP link dead duration are negotiated. \u2022 During the NCP negotiation phase, network layer packet attributes and types are negotiated. For example, during the IPCP negotiation, the IP address of a DNS server will be negotiated. To monitor link status in real time, configure link status monitoring parameters so that link faults can be identified in time. A PPP link does not require that the peer route and local route be on the same network segment. To avoid incorrect routing information, prohibit the addition of the peer host route to the local routing table of direct routes."
  },
  {
    "id": 462,
    "question": "For VRP, the login timeout period can be set only on a VTY interface.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 03, Page # 33"
  },
  {
    "id": 463,
    "question": "On a layer 2 WLAN STAs uses an AC.",
    "options": {
      "A": "True",
      "B": "False"
    },
    "correct": [
      "B"
    ],
    "type": "single",
    "explanation": "Justification Source: https://support.huawei.com/enterprise/en/doc/EDOC1100064365/e88c00c0/sta- %20access STA Access STAs can access wireless networks after APs are logged in and CAPWAP tunnels are established. STA access involves the following steps: \u2022 Scanning \u2022 Link authentication \u2022 Association A STA can access wireless networks in either IPv4 or IPv6 mode, with the IPv4 mode taking precedence. STA access depends on the number of access users supported by the AC and a single AP. \u2022 If the number of STAs associated with an AP reaches the maximum limit of the AP but not the maximum limit of the AC, a new STA cannot connect to the current AP. However, the STA can associate with another AP on the network. \u2022 If the number of STAs associated with an AP reaches the maximum limit of the AC, a new STA cannot access the WLAN even though the maximum limit of the AP is not reached. \u2022 If the number of STAs associated with an AP does not reach the maximum limit of the AP or AC, a new STA can access the WLAN. Figure 8-10 Active scanning by sending a Probe Request frame containing an SSID Explanation: This source tells us about the connections of STAs with APs. No connection with AC mentioned, thus the answer is false."
  },
  {
    "id": 464,
    "question": "Using the commands \"vlan batch 10 20\" and \"vlan batch 10 to 20\", how many VLANs are created in each case, respectively?",
    "options": {
      "A": "11 and 11",
      "B": "11 and 2",
      "C": "2 and 2",
      "D": "2 and 11"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Source: Huawei Slide # 08, Page # 31"
  },
  {
    "id": 465,
    "question": "In the network figure given below, a router receives a data packet from host A with the destination IP address 11.0.12.1. After the router forwards the packet, what will be the destination MAC and destination IP addresses",
    "options": {
      "A": "MAC-C, 11.0.12.1",
      "B": "MAC-D, 10.0.12.2",
      "C": "MAC-D, 11.0.12.1",
      "D": "MAC-B, 11.0.12.1"
    },
    "correct": [
      "D"
    ],
    "type": "single",
    "explanation": "Justification Explanation: When Host A (10.0.12.1/24) sends a packet to Host B (11.0.12.1/24), it identifies that the destination IP address is outside its own subnet. Therefore, Host A forwards the packet to its configured gateway, which is Router RTA's G0/0/1 interface (IP: 10.0.12.2, MAC: MAC-C). The router (RTA) receives the packet and checks its routing table to determine the appropriate outgoing interface for the destination IP 11.0.12.1. It determines that the packet should be forwarded out of interface G0/0/2 (MAC-D). At this point: \u2022 The destination IP remains unchanged: 11.0.12.1 \u2022 The destination MAC address is updated to the MAC address of Host B (MAC-B) \u2022 The source MAC address is updated to the MAC address of RTA's G0/0/2 interface (MAC-D) Thus, the final packet leaving RTA has: \u2022 Source IP: 10.0.12.1 \u2022 Destination IP: 11.0.12.1 \u2022 Source MAC: MAC-D \u2022 Destination MAC: MAC-B Therefore, option C is incorrect, and option D (MAC-B, 11.0.12.1) is the correct answer based on accurate Layer 2 forwarding behavior."
  },
  {
    "id": 466,
    "question": "As shown in the figure below, consider the MAC address table of switch SWA. If host A sends a data frame with the destination MAC address MAC-B, which of the following statements is correct?",
    "options": {
      "A": "Forward this data frame only from port G0/0/2",
      "B": "Forward this data frame only from port G0/0/3",
      "C": "STA discards the data frame",
      "D": "Flood this data frame"
    },
    "correct": [
      "A"
    ],
    "type": "single",
    "explanation": "Justification Reason: When Host A sends a data frame to Host B, the switch (SWA) uses its MAC address table to determine the outgoing port. Since the MAC address table of SWA shows that the MAC address of Host B (MAC-B) is associated with port GO/0/2, the switch will specifically forward the data frame to this port. Source: https://support.huawei.com/enterprise/en/doc/EDOC1100096325/406107ae/understanding\ufffethe-mac-address-table MAC Address Table Each device maintains a MAC address table. A MAC address table records the MAC address, VLAN ID and outbound interfaces learned from other devices. When forwarding a data frame, the device searches the MAC table for the outbound interface according to the destination MAC address and VLAN ID in the frame. This helps the device reduce broadcasting. Packet Forwarding Based on the MAC Address Table The device forwards packets based on the MAC address table in either of the following modes: \u2022 Unicast mode: If the destination MAC address of a packet can be found in the MAC address table, the device forwards the packet through the outbound interface specified in the matching entry. \u2022 Broadcast mode: If a packet is a broadcast or multicast packet or its destination MAC address cannot be found in the MAC address table, the device broadcasts the packet to all the interfaces in the VLAN except the inbound interface."
  },
  {
    "id": 467,
    "question": "The routing table output information of R1 is shown in the figure. Which of the following statements is correct? (Multiple choice)",
    "options": {
      "A": "The R1 to the NextHop of 10.0.2.2 is 10.0.21.2",
      "B": "The R2 to the NextHop of 10.0.2.1 is 10.0.21.2",
      "C": "The R3 to the NextHop of 10.0.2.2 is 10.0.12.2",
      "D": "The R4 to the NextHop of 10.0.0.1 is 10.0.12.2"
    },
    "correct": [
      "A",
      "D"
    ],
    "type": "multiple",
    "explanation": "Justification Explanation: Option A: Correct \u2013 This is an exact /32 match in the table. The next hop is indeed 10.0.21.2. Option B: Incorrect \u2013 There is no route for 10.0.2.1 in the table, only for 10.0.2.2. Option C: Incorrect \u2013 10.0.2.2 is explicitly routed via 10.0.21.2, not 10.0.12.2. Option D: Correct \u2013 10.0.0.1 matches the 10.0.0.0/8 route, and the next hop is 10.0.12.2. twist each question using LLM api"
  }
];

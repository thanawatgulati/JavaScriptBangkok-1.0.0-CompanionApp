import { RestaurantGroup } from '../../interfaces/Orders';
import { FetchResult } from '../../interfaces/Commons';
// import useFetcher from './_useFetcher';
import useFetcher from './useFetcher';

const useOrders = (): FetchResult<RestaurantGroup[]> => {
  return useFetcher<RestaurantGroup[]>(
    () =>
      new Promise<RestaurantGroup[]>(resolve => {
        setTimeout(
          () =>
            resolve([
              {
                title: 'Floor 8: Food stalls',
                choices: [
                  {
                    id: 'FoodStall',
                    title: 'Choose 2 from our food stalls',
                    availability: 200,
                    info:
                      '- Pad Thai with Fresh Shrimp (ผัดไทยกุ้งใหญ่สด)\n- Hong Kong Red Pork Noodle (บะหมี่หมูแดงฮ่องกง)\n- Pasta (พาสต้า)\n- Sushi (ปลาดิบ)\n',
                    customizations: [
                      {
                        id: 'Food',
                        title: 'Food (อาหาร)',
                        allowedChoices: 2,
                        choices: [
                          {
                            id: 'PAD',
                            title:
                              'Pad Thai with Fresh Shrimp (ผัดไทยกุ้งใหญ่สด)',
                            availability: 100
                          },
                          {
                            id: 'RPK',
                            title:
                              'Hong Kong Red Pork Noodle (บะหมี่หมูแดงฮ่องกง)',
                            availability: 100
                          },
                          {
                            id: 'PAS',
                            title: 'Pasta (พาสต้า)',
                            availability: 100
                          },
                          {
                            id: 'SUS',
                            title: 'Sushi (ปลาดิบ)',
                            availability: 100
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Floor 5: Restaurants',
                allowedChoices: 1,
                choices: [
                  {
                    id: 'IamThaiPasta',
                    title: 'I am Thai Pasta',
                    availability: 42,
                    info:
                      '- Chicken Kra Pao Spaghetti\n- Chicken with Chilli Paste\n- Chicken Green Curry\n',
                    customizations: [
                      {
                        id: 'Food',
                        title: 'Food (อาหาร)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'KPO',
                            title:
                              'Chicken Kra Pao Spaghetti with Onsen Egg (สปาเกตตี้กะเพราไก่+ไข่ออนเซ็น)'
                          },
                          {
                            id: 'CHL',
                            title:
                              'Chicken with Chilli Paste Spaghetti (สปาเกตตี้พริกเผาไก่)'
                          },
                          {
                            id: 'GRN',
                            title:
                              'Chicken Green Curry Spaghetti (สปาเกตตี้แกงเขียวหวานไก่)'
                          }
                        ]
                      },
                      {
                        id: 'Spice',
                        title: 'Spice level (ความเผ็ด)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'L0',
                            title: 'Level 0 (ระดับ 0)'
                          },
                          {
                            id: 'L1',
                            title: 'Level 1 (ระดับ 1)'
                          },
                          {
                            id: 'L2',
                            title: 'Level 2 (ระดับ 2)'
                          },
                          {
                            id: 'L3',
                            title: 'Level 3 (ระดับ 3)'
                          }
                        ]
                      },
                      {
                        id: 'Drink',
                        title: 'Drink (เครื่องดื่ม)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'WTR',
                            title: 'Drinking water (น้ำดื่ม)'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'Yoshinoya',
                    title: 'Yoshinoya',
                    availability: 35,
                    info:
                      '- Stamina Bowl\n- Beef Kalbi Set\n- Pork Kalbi Set\n',
                    customizations: [
                      {
                        id: 'Food',
                        title: 'Food (อาหาร)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'STA',
                            title: 'Stamina Bowl (ข้าวหน้าหมูซอสกระเทียม)',
                            info:
                              'Pork Garlic Rice Bowl + Onsen Egg + Miso Soup'
                          },
                          {
                            id: 'BFK',
                            title: 'Beef Kalbi (ชุดเนื้อย่างคาลบิ)',
                            info: 'Served with Rice and Miso Soup'
                          },
                          {
                            id: 'PRK',
                            title: 'Pork Kalbi (ชุดหมูย่างคาลบิ)',
                            info: 'Served with Rice and Miso Soup'
                          }
                        ]
                      },
                      {
                        id: 'Drink',
                        title: 'Drink (เครื่องดื่ม)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'SOF',
                            title: 'Soft drink'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'Doodee',
                    title: 'Kuek Kak by Doodee (คึกคัก โดย ดู๋ดี๋สยาม)',
                    info:
                      '- Pork Tom Yum Noodle\n- Seafood Tom Yum Fried Rice\n- Egg Noodles with Egg\n',
                    availability: 70,
                    customizations: [
                      {
                        id: 'Food',
                        title: 'Food (อาหาร)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'PTY',
                            title: 'Pork Tom Yum Noodle (ก๋วยเตี๋ยวหมูต้มยำ)'
                          },
                          {
                            id: 'STY',
                            title:
                              'Seafood Tom Yum Fried Rice (ข้าวผัดต้มยำทะเล)'
                          },
                          {
                            id: 'END',
                            title: 'Egg Noodles with Egg (บะหมี่หน้าไข่กลม)'
                          }
                        ]
                      },
                      {
                        id: 'Drink',
                        title: 'Drink (เครื่องดื่ม)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'WTR',
                            title: 'Water + Ice (น้ำดื่ม + น้ำแข็งเปล่า)'
                          }
                        ]
                      },
                      {
                        id: 'Dessert',
                        title: 'Dessert (ของหวาน)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'GJM',
                            title: 'Grass Jelly with Milk (เฉาก๊วยนมสด)'
                          },
                          {
                            id: 'GJR',
                            title: 'Grass Jelly with Red Syrup (เฉาก๊วยน้ำแดง)'
                          },
                          {
                            id: 'GJS',
                            title: 'Grass Jelly with Syrup (เฉาก๊วยน้ำเชื่อม)'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Floor 4: Restaurants',
                allowedChoices: 1,
                choices: [
                  {
                    id: 'NoodlesAndMore',
                    title: 'เพลินพุง Noodle & More',
                    info:
                      '- Crispy Pork / Chicken Omelette with Ham and Rice\n- Tom Yum Minced Pork Omelette with Rice\n- Tom Yum Goong (Shrimp) Omelette with Rice\n',
                    availability: 90,
                    customizations: [
                      {
                        id: 'Food',
                        title: 'Food (อาหาร)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'CPK',
                            title:
                              'Crispy Pork Omelette with Ham and Rice (ข้าวไข่ข้นแฮม+หมูทอด)'
                          },
                          {
                            id: 'CHK',
                            title:
                              'Crispy Chicken Omelette with Ham and Rice (ข้าวไข่ข้นแฮม+ไก่ทอด)'
                          },
                          {
                            id: 'TYP',
                            title:
                              'Tom Yum Minced Pork Omelette with Rice (ข้าวไข่ข้นต้มยำหมูสับ)'
                          },
                          {
                            id: 'TYH',
                            title:
                              'Tom Yum Goong (Shrimp) Omelette with Rice (ข้าวไข่ข้นต้มยำกุ้ง)'
                          }
                        ]
                      },
                      {
                        id: 'Drink',
                        title: 'Drink (เครื่องดื่ม)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'CTM',
                            title: 'Chrysanthemum (เก๊กฮวย)'
                          },
                          {
                            id: 'LMT',
                            title: 'Lemon Tea (ชามะนาว)'
                          },
                          {
                            id: 'IZT',
                            title: 'Thai Iced Milk Tea (ชาเย็น)'
                          },
                          {
                            id: 'WTR',
                            title: 'Water (น้ำเปล่า)'
                          }
                        ]
                      },
                      {
                        id: 'Dessert',
                        title: 'Dessert (ของหวาน)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'IPP',
                            title: 'Ice Pah Pleun (ไอซ์พาเพลิน)'
                          },
                          {
                            id: 'SNF',
                            title:
                              'Rainbow Snowflakes with Thai Sweets (จ้ำบ๊ะสายรุ้ง)'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'HuaSengHong',
                    title: 'Hua Seng Hong',
                    availability: 100,
                    info:
                      '- Crab Fried Rice\n- Rice with Stir-Fried Crab with Curry\n- Rice with Minced Pork Kra Pao\n- Rice with Roasted Pork and Crispy Pork\n',
                    customizations: [
                      {
                        id: 'Food',
                        title: 'Food (อาหาร)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'CFR',
                            title: 'Crab Fried Rice (ข้าวผัดปู)'
                          },
                          {
                            id: 'CCR',
                            title:
                              'Rice with Stir-Fried Crab with Curry (ข้าวหน้าเนื้อปูผัดผงกะหรี่)'
                          },
                          {
                            id: 'PKP',
                            title:
                              'Rice with Minced Pork Kra Pao (ข้าวผัดกระเพราหมูสับ)'
                          },
                          {
                            id: 'RPK',
                            title:
                              'Rice with Roasted Pork and Crispy Pork (ข้าวหมูแดงหมูกรอบครบเครื่อง)'
                          }
                        ]
                      },
                      {
                        id: 'Drink',
                        title: 'Drink (เครื่องดื่ม)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'CTM',
                            title: 'Chrysanthemum (เก๊กฮวย)'
                          },
                          {
                            id: 'ZHT',
                            title: 'Chinese Tea (ชาจีน)'
                          }
                        ]
                      },
                      {
                        id: 'Dessert',
                        title: 'Dessert (ของหวาน)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'SGO',
                            title: 'Sago with Cantaloupe (สาคูแคนตาลูป)'
                          },
                          {
                            id: 'THF',
                            title:
                              'Milk Custard with Fruit Salad (เต้าฮวยฟรุ๊ตสลัด)'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'MarugameSeimen',
                    title: 'Marugame Seimen',
                    availability: 80,
                    info:
                      '- Teriyaki Chicken Bento Set\n- Ebi (Shrimp) Tendon\n- Spicy Chashu Udon\n- Seafood Tom Yum Udon\n',
                    customizations: [
                      {
                        id: 'Food',
                        title: 'Food (อาหาร)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'CBN',
                            title:
                              'Teriyaki Chicken Bento Set (ชุดเบนโตะไก่เทอริยากิ)'
                          },
                          {
                            id: 'EBT',
                            title: 'Ebi (Shrimp) Tendon (ข้าวหน้ากุ้งไข่ข้น)'
                          },
                          {
                            id: 'SCU',
                            title: 'Spicy Chashu Udon (อุด้งซาชูสไปซี่)'
                          },
                          {
                            id: 'TYU',
                            title: 'Seafood Tom Yum Udon (อุด้งต้มยำทะเล)'
                          }
                        ]
                      },
                      {
                        id: 'Drink',
                        title: 'Drink (เครื่องดื่ม)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'EST',
                            title: 'Est Cola (เอสโคล่า)'
                          },
                          {
                            id: 'WTR',
                            title: 'Water (น้ำเปล่า)'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'Karayama',
                    title: 'Karayama',
                    availability: 50,
                    info: '- Fried Chicken with Kimchi Set\n',
                    customizations: [
                      {
                        id: 'Food',
                        title: 'Food (อาหาร)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'CHK',
                            title:
                              'Fried Chicken with Kimchi Set (ข้าวไก่ทอดกิมจิกระทะร้อน)'
                          }
                        ]
                      },
                      {
                        id: 'Drink',
                        title: 'Drink (เครื่องดื่ม)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'HGT',
                            title: 'Hot Green Tea (ชาเขียวร้อน)'
                          },
                          {
                            id: 'IGT',
                            title: 'Iced Green Tea (ชาเขียวเย็น)'
                          },
                          {
                            id: 'LMT',
                            title: 'Iced Lemon Tea (ชามะนาว)'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'SushiDen',
                    title: 'Sushi Den',
                    availability: 49,
                    info:
                      '- Tori Katsu with Cheese Set\n- Saba Teriyaki / Shio Set\n',
                    customizations: [
                      {
                        id: 'Food',
                        title: 'Food (อาหาร)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'TKC',
                            title:
                              'Tori Katsu with Cheese Set (ชุดไก่ทอดคัดสึใส่ชีส)'
                          },
                          {
                            id: 'STS',
                            title: 'Saba Teriyaki Set (ชุดปลาซาบะย่างเทอริยากิ)'
                          },
                          {
                            id: 'SSS',
                            title: 'Saba Shio Set (ชุดปลาซาบะย่างเกลือ)'
                          }
                        ]
                      },
                      {
                        id: 'Drink',
                        title: 'Drink (เครื่องดื่ม)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'WTR',
                            title: 'Water (น้ำเปล่า)'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'HongKongNoodle',
                    title: 'Hong Kong Noodle',
                    availability: 0,
                    info:
                      '- Rice with Laab and Spicy Chicken\n- Egg Noodle with Spicy Chicken\n- Green Noodle with Roasted Duck\n- Egg Noodle with Honey Roasted Pork\n- Egg Noodle with Chicken and Mala Sauce\n',
                    customizations: [
                      {
                        id: 'Food',
                        title: 'Food (อาหาร)',
                        textLength: 'long',
                        choices: [
                          {
                            id: 'LSC',
                            title:
                              'Rice with Laab and Spicy Chicken + Mushroom Wonton (ข้าวลาบไก่แซ่บ + เกี๊ยวเห็ดหอม)'
                          },
                          {
                            id: 'ESC',
                            title:
                              'Egg Noodle with Spicy Chicken + Mushroom Wonton (บะหมี่ไก่ย่างซี๊ด + เกี๊ยวเห็ดหอม)'
                          },
                          {
                            id: 'GDK',
                            title:
                              'Green Noodle with Roasted Duck + Mushroom Wonton (บะหมี่หยกเป็ดย่าง + เกี๊ยวเห็ดหอม)'
                          },
                          {
                            id: 'EPK',
                            title:
                              'Egg Noodle with Honey Roasted Pork + Mushroom Wonton (บะหมี่หมูแดงน้ำผึ้ง + เกี๊ยวเห็ดหอม)'
                          },
                          {
                            id: 'ECM',
                            title:
                              'Egg Noodle with Chicken and Mala Sauce + Mushroom Wonton (บะหมี่ไก่ย่างซอสหม่าล่า + เกี๊ยวเห็ดหอม)'
                          }
                        ]
                      },
                      {
                        id: 'Side',
                        title: 'Side-dish (เครื่องเคียง)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'SRM',
                            title:
                              'Spare Ribs with Mushroom Soup (ซุปซี่โครงเห็ดหอม)'
                          }
                        ]
                      },
                      {
                        id: 'Drink',
                        title: 'Drink (เครื่องดื่ม)',
                        textLength: 'short',
                        choices: [
                          {
                            id: 'WTR',
                            title: 'Water (น้ำเปล่า)'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]),
          300
        );
      })
  );
};

export default useOrders;

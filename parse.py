import os,re

dir = r"./index.html"




# s = "我是中国人(住在北京)666[真的]bbbb{确定}<kkk>"
# a = re.sub(u"\\(.*?\\)|\\{.*?\\}|\\[.*?\\]|\\<.*?\\>", "", s)
# print(a)

from bs4 import BeautifulSoup
with open(dir,encoding='utf-8',errors='ignore') as obj:
    data = BeautifulSoup(obj, "html.parser")
    # print(data.head.title)
    divs = data.find_all('div')

content =""
for div in divs:
    c = re.sub(u"\\<.*?\\>", "", str(div))
    content += c
content = content.replace("\n\n","\n")
content = content.replace("amp;","")

with open("./new.txt",'w',encoding='utf-8') as f:
    f.writelines(content)


# from docx import Document
# from docx.shared import Pt,RGBColor
 
  
# # 在一个段落中增加文字
# document = Document()
# paragraph = document.add_paragraph('Hello, ')
# # 增加文字
# paragraph.add_run('tgenkidu')
  
# # 设置word字体大小
# style = document.styles['Normal']
# font = style.font
# font.size = Pt(10)
# font.color.rgb = RGBColor(250,0,0)
# document.save('./test.docx')
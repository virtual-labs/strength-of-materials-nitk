#!/usr/bin/python
import sys
from bs4 import BeautifulSoup

alpha = "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
d={'Introduction':'1','Theory':'2','Objective':'3','Virtual Lab':'4','Manual':'5','Quiz':'6','Video':'7','Reference':'8'}
file_read = raw_input("Enter the name of the source file: ")
soup = BeautifulSoup(open(file_read))
div = ''
file_name = ''
flag = 0
exp = ''
bl = 0
for i in soup.title.string:
	
	if ((i == ":") or (i == ")")):
		break

	if( i in alpha and (bl == 0)):
		bl = 1 
	if(bl==1):
	
		file_name += i

		if i == "(":
			flag = 1
			continue
	
		if flag == 0:
			exp += i

		if flag == 1:
			div += i

#fo = open(file_name+").txt", "w")
#print "Name of the file: ", fo.name
#fo.write("Title"app+"\n");

file_w = raw_input("Enter the name of the destination file: ")
f = open(file_w,"r")
f_content = f.read()
f.close()

so = BeautifulSoup(f_content)
	
att = ''+'experiment-article-section-'+d[div]+'-content'

tagger = so.findAll('div', attrs={'id':att,'class':'content'})
tag = tagger[0]
tag.clear() 

exp_name = so.findAll('header', attrs={'class':'heading','id':'experiment-article-heading'})
exp_n = exp_name[0]
exp_n.clear()
exp_n.insert(1,exp)
if (d[div]=='4' or d[div]=='7'):
	cont = soup.findAll('div', attrs={'class': 'divLink'})
else:
	cont = soup.findAll('div', attrs={'class': 'divContent'})
tag.insert(1,cont[0])

f = open(file_w,"w")
f.write(str(so))
f.close()
#fo.close()
#-----------Created by----------------------#
#-----Pranitha and Sourav-------------------#
#-----------Conversion of html files to new UI(blue icon theme) format------#

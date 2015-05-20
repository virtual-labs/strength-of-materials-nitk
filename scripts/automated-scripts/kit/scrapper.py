#!/usr/bin/python
import re
import os
import sys
from bs4 import BeautifulSoup

def getIndexDotHtmlFiles():
	return filter(lambda fname: True if re.match(r'index\.html*', fname) else False, \
	              os.listdir('.'))


def contentScrapper(fname):	
	#print 'I am in contentScrapper', fname
	f = open(fname, "r")
	srcHtml = f.read()
	f.close()

	regexSectionNameText = r'\([a-zA-Z ]*\) :'
	regexSectionName = r'[a-zA-Z ]+'
	regexCnt = r'cnt=[0-9]+'
	
	experimentContent = BeautifulSoup(srcHtml)
	
	sectionNameTable = str(experimentContent.find_all('table', id='tabtable')[0])
	sectionNumber = re.findall(regexCnt, fname)[0]
	sectionNumber = re.findall(regexCnt, sectionNameTable).index(sectionNumber) + 1
	sectionName = re.findall(regexSectionName, str(re.findall(regexSectionNameText, experimentContent.title.string)[0]))[0]

	sectionContent = experimentContent.find_all('div', attrs={'class': 'divContent'})
	if len(sectionContent) == 0:
		sectionContent = experimentContent.find_all('div', attrs={'class': 'divQuiz'})
	
	if (len(sectionContent) != 0):
		sectionContent = sectionContent[0]
	else :
		sectionContent = ''

	return (sectionName, sectionContent)	


def driveContentScrappers():
	indexDotHtmlFiles = getIndexDotHtmlFiles()
	return map(contentScrapper, indexDotHtmlFiles)

def serializeLabContent(labContent):
	#print labContent
	f = open('template.html', "r")
	labHtml = f.read()
	f.close()
	labTemplate = BeautifulSoup(labHtml)
	articleSection = labTemplate.find_all('div', id="experiment-article-sections")[0]
	sectionNumber = 1
	for sectionName,sectionContent in labContent:
		sectionTag = labTemplate.new_tag('section', id="experiment-article-section-"+str(sectionNumber))
		articleSection.append(sectionTag)
		iconTag = labTemplate.new_tag('div', id="experiment-article-section-"+str(sectionNumber)+"-icon")
		iconTag['class']='icon'
		sectionTag.append(iconTag)
		headingTag = labTemplate.new_tag('div', id="experiment-article-section-"+str(sectionNumber)+"-heading")
		headingTag['class']='heading'
		headingTag.append(sectionName)
		sectionTag.append(headingTag)
		contentTag = labTemplate.new_tag('div', id="experiment-article-section-"+str(sectionNumber)+"-content")
		contentTag['class']='content'
		contentTag.append(sectionContent)
		sectionTag.append(contentTag)
		sectionNumber +=1	
	f = open('content.html', "w+")
	labTemplate = labTemplate.prettify()
	f.write(labTemplate.encode('utf-8'))
	f.close()

if __name__ == '__main__':
	try:
		labContent = driveContentScrappers()
		serializeLabContent(labContent)
	except Exception, e:
		print 'Exception! ', e
		#raise

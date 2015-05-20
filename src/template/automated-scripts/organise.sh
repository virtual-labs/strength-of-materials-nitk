#!/bin/bash
sublist=$(ls -1 index*\?sub* | cut -d'&' -f1 | cut -d'=' -f2 | sort -u)
for i in $sublist
do
	mkdir -p $i
	echo "Doing Folder $i"
	mv index*sub=$i* $i
	cd $i
	brchlist=$(ls -1 index*brch=* | cut -d'&' -f2 | cut -d'=' -f2 | sort -u)
	for j in $brchlist
	do
		mkdir -p $j
		echo "Doing Branch $j"
		mv index*brch=$j* $j
		cd $j
		simlist=$(ls -1 index*sim=* | cut -d'&' -f3 | cut -d'=' -f2 | sort -u)
		for k in $simlist
		do
			mkdir -p $k
			mv index*sim=$k* $k
		done
		cd ..
	done
	cd ..
done

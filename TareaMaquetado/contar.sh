y=$(ls *.txt)

for x in $y
do

    lineas=$(wc -l $x | cut -c 1-2)
    
    echo "$x tiene $lineas lineas" 

done
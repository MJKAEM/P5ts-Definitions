import os

def main():
    """
    Main function
    """
    inputdir = "src"
    classfilesdir = inputdir + "/class_files"

    with open("full.d.ts", 'w') as outputfile:
        printtooutput(inputdir + "/p5.d.ts", outputfile)
        printtooutput(inputdir + "/p5.global-mode.d.ts", outputfile)
        for filename in os.listdir(classfilesdir):
            printtooutput(classfilesdir + "/" + filename, outputfile)

def printtooutput(filename, output):
    """
    Reads the input files and writes them to the output file.
    """

    with open(filename) as inputfile:
        line = inputfile.readline()
        while line != "":
            output.write(line)
            line = inputfile.readline()

        # Safety newline, in case I forget to add
        output.write('\r\n')

if __name__ == "__main__":
    main()

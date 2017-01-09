import os

OUTPUT_NAME_DEFAULT = "p5.complete.d.ts"

def main():
    """
    Main function
    """
    print("Building files into " + OUTPUT_NAME_DEFAULT)
    inputdir = "src"
    classfilesdir = inputdir + "/class_files"

    with open(OUTPUT_NAME_DEFAULT, 'w') as outputfile:
        printtooutput(inputdir + "/p5.d.ts", outputfile)
        printtooutput(inputdir + "/p5.global-mode.d.ts", outputfile)
        for filename in os.listdir(classfilesdir):
            printtooutput(classfilesdir + "/" + filename, outputfile)

    print("Success! The built file can be found in " + OUTPUT_NAME_DEFAULT + "!")

def printtooutput(filename, output):
    """
    Reads the input files and writes them to the output file.
    """

    with open(filename) as inputfile:
        print("Reading from " + filename)
        line = inputfile.readline()
        while line != "":
            output.write(line)
            line = inputfile.readline()

        # Safety newline, in case I forget to add
        output.write('\r\n')

if __name__ == "__main__":
    main()

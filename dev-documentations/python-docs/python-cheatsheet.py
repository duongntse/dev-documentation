import re
import os
import itertools
from textwrap import dedent
for each in result:
   print(each)


shapes = ['circle', 'triangle', 'square']
result = itertools.combinations_with_replacement(shapes, 2)
for each in result:
   print(each)

for i in itertools.count(10, 3):
   print(i)
   if i > 20:
       break

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
for color in itertools.cycle(colors):
   print(color)

colors = ['red', 'orange', 'yellow', 'green', 'blue']
shapes = ['circle', 'triangle', 'square', 'pentagon']
result = itertools.chain(colors, shapes)
for each in result:
   print(each)

shapes = ['circle', 'triangle', 'square', 'pentagon']
selections = [True, False, True, False]
result = itertools.compress(shapes, selections)
for each in result:
   print(each)

data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
result = itertools.dropwhile(lambda x: x < 5, data)
for each in result:
   print(each)

data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
result = itertools.dropwhile(lambda x: x < 10, data)
for each in result:
   print(each)

for key, group in itertools.groupby(robots, key=lambda x: x['faction']):
   print(key)
   print(list(group))

num_data = [1, 2, 3]
alpha_data = ['a', 'b', 'c']
result = itertools.product(num_data, alpha_data)
for each in result:
    print(each)

newline_regex = re.compile('.*', re.DOTALL)
newline_regex.search(
    'Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
'Serve the public trust.\nProtect the innocent.\nUphold the law.'

robocop = re.compile(r'robocop', re.I)

robocop.search('Robocop is part man, part machine, all cop.').group()
'Robocop'


def my_function():
    print('''
        Dear Alice,

        Eve's cat has been arrested for catnapping, cat burglary, and extortion.

        Sincerely,
        Bob
        ''').strip()


phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # area code
    (\s|-|\.)?                    # separator
    \d{3}                         # first 3 digits
    (\s|-|\.)                     # separator
    \d{4}                         # last 4 digits
    (\s*(ext|x|ext.)\s*\d{2,5})?  # extension
    )''', re.VERBOSE)

my_files = ['accounts.txt', 'details.csv', 'invite.docx']

for filename in my_files:
    print(os.path.join('C:\\Users\\asweigart', filename))


total_size = 0
for filename in os.listdir(os.getcwd()):
	total_size = total_size + os.path.getsize(os.path.join(os.getcwd(), filename))
print(total_size)  # size in bytes
print(total_size/1024)  # size in MBs
print(total_size/1024/1024)  # size in GBs

var = 100
if (var == 100):
    print("Value of expression is 100")
print("Good bye!")

for folder_name, subfolders, filenames in os.walk(os.getcwd()):
	print('The current folder is {}'.format(folder_name))

	if len(subfolders) > 0:
		for subfolder in subfolders:
			print('SUBFOLDER OF {}: {}'.format(folder_name, subfolder))

	if len(filenames) > 0:
		for filename in filenames:
			print('FILE INSIDE {}: {}'.format(folder_name, filename))

    print('')

import logging

logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')

logging.debug('Start of program')

def factorial(n):

    logging.debug('Start of factorial(%s)' % (n))
    total = 1

    for i in range(1, n + 1):
        total *= i
        logging.debug('i is ' + str(i) + ', total is ' + str(total))

    logging.debug('End of factorial(%s)' % (n))

    return total

print(factorial(5))
logging.debug('End of program')

# Sometimes it's a README fix, or something like that - which isn't relevant for
# including in a project's CHANGELOG for example
declared_trivial = github.pr_title.include? "#trivial"

# Make it more obvious that a PR is a work in progress and shouldn't be merged yet
warn("PR is classed as Work in Progress") if github.pr_title.include? "[WIP]"

# Warn when there is a big PR
warn("Big PR") if git.lines_of_code > 500

# Don't let testing shortcuts get into master by accident
fail("fdescribe left in tests") if `grep -r fdescribe tests/ `.length > 1
fail("fit left in tests") if `grep -r fit tests/ `.length > 1

#TODO: We should send this message only if `bundle exec fastlane android deployAppetize` doesn't finished with an error
message("<table> <tr> <td> <a href='http://bit.ly/mtgx-appetize'> <p align='center'> <img height='130' src='http://bit.ly/2vD4vJg'/> <br/> Nexus 5 </p></a> </td></tr></table>")

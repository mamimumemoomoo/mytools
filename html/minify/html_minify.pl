#!/bin/perl

use Furl::HTTP;
use JSON::XS;

#
# perl html_minify.pl target.html minify.html
#

my $target_file_name = $ARGV[0];
my $minify_file_name = $ARGV[1];

my $minify_line = "";
open(DATAFILE, "<", $target_file_name) or die("error");
while(my $line = <DATAFILE>){
	chomp($line);
	$minify_line .= $line;
}
close(DATAFILE);

# タグ間のスペース削除
$minify_line =~ s/\>\s+\</\>\</g;

$minify_file_name ||= $target_file_name;
open(DATAFILE, ">", $minify_file_name) or die("error");
print DATAFILE $minify_line;
close(DATAFILE);

print "target_file_name: $target_file_name\n";
print "minify_file_name: $minify_file_name\n";
print "minify done.\n";

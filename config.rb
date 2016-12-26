###
# Page options, layouts, aliases and proxies
###

activate :directory_indexes

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page "/sitemap.xml", layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
page "/publications/*", layout: :section
page "/research/*", layout: :section
page "/curriculum_vitae/*", layout: :section

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###


def page_classes
  path = request.path_info.dup
  path << settings.index_file if path.match(%r{/$})
  path = path.gsub(%r{^/}, '')

  classes = []
  parts = path.split('.')[0].split('/')
  parts.each_with_index { |path, i| classes << parts.first(i+1).join('_') }

  classes.join(' ')
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :relative_assets
end

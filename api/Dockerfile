FROM ruby:2.2.2
EXPOSE 8080
RUN apt-get update -qq && apt-get install -y build-essential

# for postgres
RUN apt-get install -y libpq-dev

# for nokogiri
RUN apt-get install -y libxml2-dev libxslt1-dev

# for capybara-webkit
RUN apt-get install -y libqt4-webkit libqt4-dev xvfb
RUN apt-get install imagemagick -y
# for a JS runtime
RUN apt-get install -y nodejs

COPY Gemfile* /tmp/
WORKDIR /tmp
RUN export RAILS_ENV=production
RUN bundle install
RUN cd ..
ADD . /api
WORKDIR /api
RUN bundle install

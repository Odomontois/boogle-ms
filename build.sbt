import PlayKeys.playRunHooks

scalaVersion := "2.11.8"

name := "boogle-ms"

version := "0.0.1"

lazy val root = project in file(".") enablePlugins PlayScala

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  specs2 % Test,
  "com.codeborne" % "phantomjsdriver" % "1.2.1"
)

playRunHooks <+= baseDirectory.map(Webpack.apply)

routesGenerator := InjectedRoutesGenerator

excludeFilter in (Assets, JshintKeys.jshint) := "*.js"

watchSources ~= { (ws: Seq[File]) =>
  ws filterNot { path =>
    path.getName.endsWith(".js") || path.getName == "build"
  }
}

pipelineStages := Seq(rjs, digest, gzip)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"
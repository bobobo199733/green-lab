##Installing the necessary packages - ggplot2 & reshape
install.packages('ggplot2')
install.packages('reshape')
install.packages("dplyr")
install.packages( "ggstatsplot")
install.packages('ggpubr')
install.packages("PerformanceAnalytics")
require("dplyr")
library(ggplot2)
library(reshape)
library(plyr)
library(tidyverse)
library(ggstatsplot)
library(ggpubr)
library(PerformanceAnalytics)
#=========================================================
# Check raw data
#=========================================================
#Loading the CSV files - Joules, CPU usage and Load time
raw_data<-read.csv(file = 'e.csv',head=TRUE,sep=",")

#check data type
print(is.data.frame(raw_data))
print(ncol(raw_data))  # columns
print(nrow(raw_data))  # line

# remove unnecessary columns(device name)
raw_data<-raw_data[,-1]

# drop missing values
raw_data = drop_na(raw_data)

print(ncol(raw_data))  # columns
print(nrow(raw_data))  # line

# write data to csv file
write.csv(x = raw_data,file = "data.csv")


# loading data
data = read.csv("data.csv", header = TRUE, sep = ",")

data$website = as.factor(data$subject)
data$prefix = as.factor(data$prefix)
data$browser = as.factor(data$browser)


#=========================================================
# # Descriptive statistics
#=========================================================

# Data exploration
by(data[data$browser=="chrome", ], data[data$browser=="chrome", ]$prefix, summary)
by(data[data$browser=="firefox", ], data[data$browser=="firefox", ]$prefix, summary)
by(data[data$browser=="opera", ], data[data$browser=="opera", ]$prefix, summary)

#statistics resulte
get_std <- function(data, browser, prefix) {
  print(sd(data[which(data$browser == browser & data$prefix==prefix), ]$e))
  print(mean(data[which(data$browser == browser & data$prefix==prefix), ]$e))
  print(max(data[which(data$browser == browser & data$prefix==prefix), ]$e))
  print(min(data[which(data$browser == browser & data$prefix==prefix), ]$e))
  print(median(data[which(data$browser == browser & data$prefix==prefix), ]$e))
  print(quantile(data[which(data$browser == browser & data$prefix==prefix), ]$e,c(0.25,0.75)))
  print(sd(data[which(data$browser == browser & data$prefix==prefix), ]$lt))
  print(mean(data[which(data$browser == browser & data$prefix==prefix), ]$lt))
  print(max(data[which(data$browser == browser & data$prefix==prefix), ]$lt))
  print(min(data[which(data$browser == browser & data$prefix==prefix), ]$lt))
  print(median(data[which(data$browser == browser & data$prefix==prefix), ]$lt))
  print(quantile(data[which(data$browser == browser & data$prefix==prefix), ]$lt,c(0.25,0.75)))
  print(sd(data[which(data$browser == browser & data$prefix==prefix), ]$cu))
  print(mean(data[which(data$browser == browser & data$prefix==prefix), ]$cu))
  print(max(data[which(data$browser == browser & data$prefix==prefix), ]$cu))
  print(min(data[which(data$browser == browser & data$prefix==prefix), ]$cu))
  print(median(data[which(data$browser == browser & data$prefix==prefix), ]$cu))
  print(quantile(data[which(data$browser == browser & data$prefix==prefix), ]$cu,c(0.25,0.75)))
}

#data
get_std(data, "chrome", 0)
get_std(data, "firefox", 0)
get_std(data,"opera", 0)
get_std(data, "chrome", 1)
get_std(data, "firefox", 1)
get_std(data,"opera", 1)

#boxplots with/without prefixes
#1.1 for one browser & energy
ec <- ggplot(data[data$browser=="chrome",], aes(x = prefix, y=e,color = prefix, group=prefix)) + 
  geom_violin(trim=FALSE,alpha=0.5)+
  geom_boxplot(size=0.5,width=0.2,varwidth = TRUE,outlier.size = 0.5) + xlab("CSS Prefixes") + ylab("Energy (J)")+ 
  stat_summary(fun=mean, geom="point", shape=5, size=1.5) + 
  theme(text = element_text(size = 15)) + 
  scale_x_discrete(labels=c("Not applied", "Applied"))

#1.2 for one browser & energy
ef <- ggplot(data[data$browser=="firefox",], aes(x = prefix, y=e,color = prefix, group=prefix)) + 
  geom_violin(trim=FALSE,alpha=0.5)+
  geom_boxplot(size=0.5,width=0.2,varwidth = TRUE,outlier.size = 0.5) + xlab("CSS Prefixes") + ylab("Energy (J)")+ 
  stat_summary(fun=mean, geom="point", shape=5, size=1.5) + 
  theme(text = element_text(size = 15)) + 
  scale_x_discrete(labels=c("Not applied", "Applied"))
#1.3 for one browser & energy
eo <- ggplot(data[data$browser=="opera",], aes(x = prefix, y=e,color = prefix, group=prefix)) + 
  geom_violin(trim=FALSE,alpha=0.5)+
  geom_boxplot(size=0.5,width=0.2,varwidth = TRUE,outlier.size = 0.5) + xlab("CSS Prefixes") + ylab("Energy (J)")+ 
  stat_summary(fun=mean, geom="point", shape=5, size=1.5) + 
  theme(text = element_text(size = 15)) + 
  scale_x_discrete(labels=c("Not applied", "Applied"))

##Combine
ggarrange(ec,ef,eo, 
          labels = c("Chrome", "Firefox", "Opera"),
          ncol = 3, nrow = 1)



#2.1 for one browser & loading time
ltc <- ggplot(data[data$browser=="chrome",], aes(x = prefix, y=lt,color = prefix, group=prefix)) + 
  geom_violin(trim=FALSE,alpha=0.5)+
  geom_boxplot(size=0.5,width=0.2,varwidth = TRUE,outlier.size = 0.5) + xlab("CSS Prefixes") + ylab("Loading time(ms)")+ 
  stat_summary(fun=mean, geom="point", shape=5, size=1.5) + 
  theme(text = element_text(size = 15)) + 
  scale_x_discrete(labels=c("Not applied", "Applied"))

#2.2 for one browser & loading time
ltf <- ggplot(data[data$browser=="firefox",], aes(x = prefix, y=lt,color = prefix, group=prefix)) + 
  geom_violin(trim=FALSE,alpha=0.5)+
  geom_boxplot(size=0.5,width=0.2,varwidth = TRUE,outlier.size = 0.5) + xlab("CSS Prefixes") + ylab("Loading time(ms)")+ 
  stat_summary(fun=mean, geom="point", shape=5, size=1.5) + 
  theme(text = element_text(size = 15)) + 
  scale_x_discrete(labels=c("Not applied", "Applied"))
#2.3 for one browser & loading time
lto <- ggplot(data[data$browser=="opera",], aes(x = prefix, y=lt,color = prefix, group=prefix)) + 
  geom_violin(trim=FALSE,alpha=0.5)+
  geom_boxplot(size=0.5,width=0.2,varwidth = TRUE,outlier.size = 0.5) + xlab("CSS Prefixes") + ylab("Loading time(ms)")+ 
  stat_summary(fun=mean, geom="point", shape=5, size=1.5) + 
  theme(text = element_text(size = 15)) + 
  scale_x_discrete(labels=c("Not applied", "Applied"))

##Combine
ggarrange(ltc,ltf,lto, 
          labels = c("Chrome", "Firefox", "Opera"),
          ncol = 3, nrow = 1)



#3.1 for one browser & cpu usage
cuc <- ggplot(data[data$browser=="chrome",], aes(x = prefix, y=cu,color = prefix, group=prefix)) + 
  geom_violin(trim=FALSE,alpha=0.5)+
  geom_boxplot(size=0.5,width=0.2,varwidth = TRUE,outlier.size = 0.5) + xlab("CSS Prefixes") + ylab("CPU usage(%)")+ 
  stat_summary(fun=mean, geom="point", shape=5, size=1.5) + 
  theme(text = element_text(size = 15)) + 
  scale_x_discrete(labels=c("Not applied", "Applied"))

#3.2 for one browser & cpu usage
cuf <- ggplot(data[data$browser=="firefox",], aes(x = prefix, y=cu,color = prefix, group=prefix)) + 
  geom_violin(trim=FALSE,alpha=0.5)+
  geom_boxplot(size=0.5,width=0.2,varwidth = TRUE,outlier.size = 0.5) + xlab("CSS Prefixes") + ylab("CPU usage(%)")+ 
  stat_summary(fun=mean, geom="point", shape=5, size=1.5) + 
  theme(text = element_text(size = 15)) + 
  scale_x_discrete(labels=c("Not applied", "Applied"))
#3.3 for one browser & cpu usage
cuo <- ggplot(data[data$browser=="opera",], aes(x = prefix, y=cu,color = prefix, group=prefix)) + 
  geom_violin(trim=FALSE,alpha=0.5)+
  geom_boxplot(size=0.5,width=0.2,varwidth = TRUE,outlier.size = 0.5) + xlab("CSS Prefixes") + ylab("CPU usage(%)")+ 
  stat_summary(fun=mean, geom="point", shape=5, size=1.5) + 
  theme(text = element_text(size = 15)) + 
  scale_x_discrete(labels=c("Not applied", "Applied"))

##Combine
ggarrange(cuc,cuf,cuo, 
          labels = c("Chrome", "Firefox", "Opera"),
          ncol = 3, nrow = 1)


#2 all browsers & energy
ggplot(data, aes(x=prefix, y=e, color = prefix,group=prefix)) + 
  geom_violin(trim=FALSE,alpha=0.5)+
  geom_boxplot(size=0.5,width=0.2,varwidth = TRUE,outlier.size = 0.5) +
  coord_flip() + 
  labs(title="Boxplots for energy consumption with and without CSS prefixes", x="CSS Prefixes",y="Energy consumption, Joules") + 
  theme(axis.title.y = element_blank(),
        axis.text.y = element_blank(),
        legend.title = element_blank(),
        text = element_text(size=10),
        legend.position = c(0.85, 0.5))

#4 all browsers & loading time
ggplot(data, aes(x=prefix, y=lt, color = prefix)) + 
  geom_boxplot() + coord_flip() + 
  labs(title="Boxplots for loading time with and without CSS prefixes", y="Loading time , ms") + 
  theme(axis.title.y = element_blank(),
        axis.text.y = element_blank(),
        legend.title = element_blank(),
        legend.position = c(0.8, 0.5))

#4 all browsers & CPU usage
ggplot(data, aes(x=prefix, y=cu, color = prefix)) + 
  geom_boxplot() + coord_flip() + 
  labs(title="Boxplots for CPU usage with and without CSS prefixes", y="CPU usage, %") + 
  theme(axis.title.y = element_blank(),
        axis.text.y = element_blank(),
        legend.title = element_blank(),
        legend.position = c(0.8, 0.5))


#=========================================================
# Statistical analysis
#=========================================================

# check normality

check_normality <- function(dataset, x, title) {
  plot(density(dataset), xlab=x, main=paste("Density plot for", title, sep=" "))
  qqnorm(dataset, main=paste("Normal Q-Q Plot for", title, sep=" ")) 
  print(shapiro.test(dataset)) 
}

# Chrome, critical = 0
check_normality(data[which(data$browser == "chrome" & data$prefix==0), ]$e, "Energy usage (J)", "chrome, prefix = 0, energy usage")
check_normality(data[which(data$browser == "chrome" & data$prefix==0), ]$lt, "Loading time (ms)", "chrome, prefix = 0, loading time")
check_normality(data[which(data$browser == "chrome" & data$prefix==0), ]$cu, "Cpu usage (%)", "chrome, prefix = 0, Cpu usage")

# Chrome, critical = 1
check_normality(data[which(data$browser == "chrome" & data$prefix==1), ]$e, "Energy usage (J)", "chrome,prefix = 1, energy usage")
check_normality(data[which(data$browser == "chrome" & data$prefix==1), ]$lt, "Loading time (ms)", "chrome, prefix = 1, loading time")
check_normality(data[which(data$browser == "chrome" & data$prefix==1), ]$cu, "Cpu usage (%)", "chrome, prefix = 1, Cpu usage")

# Firefox, critical = 0
check_normality(data[which(data$browser == "firefox" & data$prefix==0), ]$e, "Energy usage (J)", "firefox, prefix = 0, energy usage")
check_normality(data[which(data$browser == "firefox" & data$prefix==0), ]$lt, "Loading time (ms)", "firefox, prefix = 0, loading time")
check_normality(data[which(data$browser == "firefox" & data$prefix==0), ]$cu, "Cpu usage (%)", "firefox, prefix = 0, Cpu usage")


# Firefox, critical = 1
check_normality(data[which(data$browser == "firefox" & data$prefix==1), ]$e, "Energy usage (J)", "firefox, prefix = 1, energy usage")
check_normality(data[which(data$browser == "firefox" & data$prefix==1), ]$lt, "Loading time (ms)", "firefox, prefix = 1, loading time")
check_normality(data[which(data$browser == "firefox" & data$prefix==1), ]$cu, "Cpu usage (%)", "firefox, prefix = 1, Cpu usage")


# Opera, critical = 0
check_normality(data[which(data$browser == "opera" & data$prefix==0), ]$e, "Energy usage (J)", "opera, prefix = 0, energy usage")
check_normality(data[which(data$browser == "opera" & data$prefix==0), ]$lt, "Loading time (ms)", "opera, prefix = 0, loading time")
check_normality(data[which(data$browser == "opera" & data$prefix==0), ]$cu, "Cpu usage (%)", "opera, prefix = 0, Cpu usage")


# Opera, critical = 1
check_normality(data[which(data$browser == "opera" & data$prefix==1), ]$e, "Energy usage (J)", "opera, prefix = 1, energy usage")
check_normality(data[which(data$browser == "opera" & data$prefix==1), ]$lt, "Loading time (ms)", "opera, prefix = 1, loading time")
check_normality(data[which(data$browser == "opera" & data$prefix==1), ]$cu, "Cpu usage (%)", "opera, prefix = 1, Cpu usage")


#all browsers
# critical = 0
check_normality(data[which(data$prefix==0), ]$e, "Energy usage (J)", " prefix = 0, energy usage")
check_normality(data[which(data$prefix==0), ]$lt, "Loading time (ms)", " prefix = 0, loading time")
check_normality(data[which(data$prefix==0), ]$cu, "Cpu usage (%)", " prefix = 0, Cpu usage")
# critical = 1
check_normality(data[which(data$prefix==1), ]$e, "Energy usage (J)", " prefix = 1, energy usage")
check_normality(data[which(data$prefix==1), ]$lt, "Loading time (ms)", " prefix = 1, loading time")
check_normality(data[which(data$prefix==1), ]$cu, "Cpu usage (%)", " prefix = 1, Cpu usage")


# FIGURES FOR REPORT
# Figure density plots
par(mfrow=c(2,3))
plot(density(data[which(data$browser == "chrome" & data$prefix==0), ]$e), xlab="Energy usage (J)", main="Density plot for chrome, prefix = 0, energy usage")
plot(density(data[which(data$browser == "chrome" & data$prefix==1), ]$e), xlab="Energy usage (J)", main="Density plot for chrome, prefix = 1, energy usage")
plot(density(data[which(data$browser == "chrome" & data$prefix==0), ]$fcp), xlab="Loading time (ms)", main="Density plot for chrome, prefix = 0, loading time")
plot(density(data[which(data$browser == "chrome" & data$prefix==1), ]$fcp), xlab="Loadingtime (ms)", main="Density plot for chrome, prefix = 1, loadting time")
plot(density(data[which(data$browser == "chrome" & data$prefix==0), ]$cu), xlab="Cpu usage (%)", main="chrome, prefix = 0, Cpu usage")
plot(density(data[which(data$browser == "chrome" & data$prefix==1), ]$cu), xlab="Cpu usage (%)", main="chrome, prefix = 1, Cpu usage")

# Figure Q-Q plots 
par(mfrow=c(2,3))
qqnorm(data[which(data$browser == "chrome" & data$prefix==0), ]$e, main="prefix = 0, energy usage")
qqline(data[which(data$browser == "chrome" & data$prefix==0), ]$e, col="blue")
qqnorm(data[which(data$browser == "chrome" & data$prefix==1), ]$e, main="prefix = 1, energy usage")
qqline(data[which(data$browser == "chrome" & data$prefix==1), ]$e, col="blue")
qqnorm(data[which(data$browser == "chrome" & data$prefix==0), ]$lt, main="prefix = 0, loadingtime")
qqline(data[which(data$browser == "chrome" & data$prefix==0), ]$lt, col="blue")
qqnorm(data[which(data$browser == "chrome" & data$prefix==1), ]$lt, main="prefix = 1, loadingtime")
qqline(data[which(data$browser == "chrome" & data$prefix==1), ]$lt, col="blue")
qqnorm(data[which(data$browser == "chrome" & data$prefix==0), ]$cu, main="prefix = 0, CPU usage")
qqline(data[which(data$browser == "chrome" & data$prefix==0), ]$cu, col="blue")
qqnorm(data[which(data$browser == "chrome" & data$prefix==1), ]$cu, main="prefix = 1, CPU usage")
qqline(data[which(data$browser == "chrome" & data$prefix==1), ]$cu, col="blue")


par(mfrow=c(2,3))
qqnorm(data[which(data$browser == "firefox" & data$prefix==0), ]$e, main="prefix = 0, energy usage")
qqline(data[which(data$browser == "firefox" & data$prefix==0), ]$e,col="blue")
qqnorm(data[which(data$browser == "firefox" & data$prefix==1), ]$e, main=" prefix = 1, energy usage")
qqline(data[which(data$browser == "firefox" & data$prefix==1), ]$e,col="blue")
qqnorm(data[which(data$browser == "firefox" & data$prefix==0), ]$lt, main="prefix = 0, loadingtime")
qqline(data[which(data$browser == "firefox" & data$prefix==0), ]$lt,col="blue")
qqnorm(data[which(data$browser == "firefox" & data$prefix==1), ]$lt, main="prefix = 1, loadingtime")
qqline(data[which(data$browser == "firefox" & data$prefix==1), ]$lt,col="blue")
qqnorm(data[which(data$browser == "firefox" & data$prefix==0), ]$cu, main="prefix = 0, CPU usage")
qqline(data[which(data$browser == "firefox" & data$prefix==0), ]$cu,col="blue")
qqnorm(data[which(data$browser == "firefox" & data$prefix==1), ]$cu, main="prefix = 1, CPU usage")
qqline(data[which(data$browser == "firefox" & data$prefix==1), ]$cu,col="blue")


par(mfrow=c(2,3))
qqnorm(data[which(data$browser == "opera" & data$prefix==0), ]$e, main="prefix = 0, energy usage")
qqline(data[which(data$browser == "opera" & data$prefix==0), ]$e,col="blue")
qqnorm(data[which(data$browser == "opera" & data$prefix==1), ]$e, main="prefix = 1, energy usage")
qqline(data[which(data$browser == "opera" & data$prefix==1), ]$e,col="blue")
qqnorm(data[which(data$browser == "opera" & data$prefix==0), ]$lt, main="prefix = 0, loadingtime")
qqline(data[which(data$browser == "opera" & data$prefix==0), ]$lt,col="blue")
qqnorm(data[which(data$browser == "opera" & data$prefix==1), ]$lt, main="prefix = 1, loadingtime")
qqline(data[which(data$browser == "opera" & data$prefix==1), ]$lt,col="blue")
qqnorm(data[which(data$browser == "opera" & data$prefix==0), ]$cu, main="prefix = 0, CPU usage")
qqline(data[which(data$browser == "opera" & data$prefix==0), ]$cu,col="blue")
qqnorm(data[which(data$browser == "opera" & data$prefix==1), ]$cu, main="prefix = 1, CPU usage")
qqline(data[which(data$browser == "opera" & data$prefix==1), ]$cu,col="blue")




par(mfrow=c(1,1))
plot(density(data[which(data$browser == "chrome" & data$prefix==0), ]$e), 
     xlab="Energy (ms)", ylim=c(0,0.015), col="yellow", 
     main="With and without CSS prefixes of energy in Chrome",
     cex.main=2, cex.lab=1.5)
lines(density(data[which(data$browser == "chrome" & data$prefixes==1), ]$e), col="red")
legend("topright",
       c("CSS Prefixes applied", "CSS Prefixes not applied"),
       fill=c("red","yellow"),
       cex=1.5
)


#=========================================================
# Hypothesis test
#=========================================================

# Wilcoxon rank sum test  energy of chrome and opera

#energy of chrome
# p-value = 
wilcox.test(x=data[which(data$browser == "chrome" & data$prefix==0), ]$e, 
       y=data[which(data$browser == "chrome" & data$prefix==1), ]$e, 
       paired=TRUE)
#energy of firefox
# p-value =  
wilcox.test(x=data[which(data$browser == "firefox" & data$prefix==0), ]$e, 
       y=data[which(data$browser == "firefox" & data$prefix==1), ]$e, 
       paired=TRUE)
#energy of opera
# p-value =  
wilcox.test(x=data[which(data$browser == "opera" & data$prefix==0), ]$e, 
       y=data[which(data$browser == "opera" & data$prefix==1), ]$e, 
       paired = TRUE)

#lt of chrome
# p-value = 
wilcox.test(x=data[which(data$browser == "chrome" & data$prefix==0), ]$lt, 
       y=data[which(data$browser == "chrome" & data$prefix==1), ]$lt, 
       paired=TRUE)
#lt of firefox
# p-value =  
wilcox.test(x=data[which(data$browser == "firefox" & data$prefix==0), ]$lt, 
       y=data[which(data$browser == "firefox" & data$prefix==1), ]$lt, 
       paired=TRUE)
#lt of opera
# p-value =  
wilcox.test(x=data[which(data$browser == "opera"& data$prefix==0), ]$lt, 
       y=data[which(data$browser == "opera"& data$prefix==1), ]$lt, 
       paired = TRUE)


#cpu of chrome
# p-value = 
wilcox.test(x=data[which(data$browser == "chrome" &data$prefix==0), ]$cu, 
       y=data[which(data$browser == "chrome" &data$prefix==1), ]$cu, 
       paired=TRUE)



# Wilcoxon rank sum test with continuity correction 
#cpu  of firefox
t.test(x=data[which(data$browser == "firefox" &data$prefix==0), ]$cu, 
            y=data[which(data$browser == "firefox" &data$prefix==1), ]$cu, 
            paired = TRUE)

# cpu  of opera
t.test(x=data[which(data$browser == "opera" &data$prefix==0), ]$cu, 
            y=data[which(data$browser == "opera" &data$prefix==1), ]$cu, 
            paired = TRUE)


#=========================================================
# Correlation
#=========================================================
#chrome cu& lt
datac<-subset(data,data$browser == "chrome")
datac
cc<-ggplot(datac, mapping = aes(x = log(cu), y = log(e), colour = prefix)) +
  geom_point(size = 3)+
  geom_smooth(method=lm)+
  abline(lm(datac$cu~datac$e), col='red')
#cor.test(x=datac$cu, y=datac$e, method="spearman" , conf.int=TRUE, exact = FALSE)
datac1<-subset(datac,datac$prefix == 1)
datac0<-subset(datac,datac$prefix == 0)
cor.test(x=datac1$cu, y=datac1$e, method="spearman" , conf.int=TRUE)
cor.test(x=datac0$cu, y=datac0$e, method="spearman" , conf.int=TRUE)

#firefox cu& lt
dataf<-subset(data,data$browser == "firefox")
dataf
cf<-ggplot(dataf, mapping = aes(x = log(cu), y = log(e), colour = prefix)) +
  geom_point(size = 3)+
  geom_smooth(method=lm)+
  abline(lm(data$cu~data$e), col='red')

#cor.test(x=dataf$cu, y=dataf$e, method="spearman" , conf.int=TRUE, exact = FALSE)

dataf1<-subset(dataf,dataf$prefix == 1)
dataf0<-subset(dataf,dataf$prefix == 0)
cor.test(x=dataf1$cu, y=dataf1$e, method="spearman" , conf.int=TRUE)
cor.test(x=dataf0$cu, y=dataf0$e, method="spearman" , conf.int=TRUE)

#opera cu& lt
datao<-subset(data,data$browser == "opera")
datao
co<-ggplot(datao, mapping = aes(x = log(cu), y = log(e), colour = prefix)) +
  geom_point(size = 3)+
  geom_smooth(method=lm)+
  abline(lm(data$cu~data$e), col='red')
#cor.test(x=datao$cu, y=datao$e, method="spearman" , conf.int=TRUE, exact = FALSE)

datao1<-subset(datao,datao$prefix == 1)
datao0<-subset(datao,datao$prefix == 0)
cor.test(x=datao1$cu, y=datao1$e, method="spearman" , conf.int=TRUE)
cor.test(x=datao0$cu, y=datao0$e, method="spearman" , conf.int=TRUE)

#chart.Correlation(data, method = "pearson")


ggarrange(cc,cf,co, 
          labels = c("Chrome", "Firefox", "Opera"),
          ncol = 3, nrow = 1)

pairs(~prefix+browser+lt+cu+e,data = data, main = "Scatterplot Matrix")
cor.test(x=datao$cu, y=datao$e, method="pearson" , conf.int=TRUE)
cor.test(x=datao$lt, y=datao$e, method="pearson" , conf.int=TRUE)
